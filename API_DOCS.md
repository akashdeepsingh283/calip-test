# Calip.io Backend — API Documentation

> **Base URL:** `http://localhost:5000`  
> **Swagger UI:** `http://localhost:5000/api-docs`  
> **Content-Type:** `application/json` (unless specified `multipart/form-data`)  
> **Auth:** JWT Bearer Token (wallet-based via MetaMask)

---

## Table of Contents

1. [Authentication Flow](#1-authentication-flow)
2. [Auth — `/auth`](#2-auth---auth)
3. [Users — `/users`](#3-users---users)
4. [Startups — `/startups`](#4-startups---startups)
5. [Notifications — `/users/notifications`](#5-notifications---usersnotifications)
6. [Tokens — `/tokens`](#6-tokens---tokens)
7. [Oracle — `/oracle`](#7-oracle---oracle)
8. [Enquiry — `/enquiry`](#8-enquiry---enquiry)
9. [Marketplace — `/marketplace`](#9-marketplace---marketplace)
10. [Presales — `/presales`](#10-presales---presales)
11. [Participation — `/participation`](#11-participation---participation)
12. [Analytics — `/analytics`](#12-analytics---analytics)
13. [Admin — `/admin`](#13-admin---admin)
14. [Waitlist — `/waitlist`](#14-waitlist---waitlist)
15. [Contact — `/contact`](#15-contact---contact)
16. [WebSocket (Socket.IO)](#16-websocket-socketio)
17. [Postman Setup Guide](#17-postman-setup-guide)
18. [Quick Reference — All Routes](#18-quick-reference--all-routes)

---

## 1. Authentication Flow

This API uses **wallet-based authentication** (MetaMask / any EVM wallet):

```
Step 1: POST /auth/nonce       → receive a nonce string
Step 2: Sign the nonce using MetaMask (or any EVM wallet)
Step 3: POST /auth/verify      → send { walletAddress, signature }
Step 4: Receive { accessToken, refreshToken, role }
Step 5: Use Bearer <accessToken> in Authorization header for all protected routes
Step 6: POST /auth/refresh     → when accessToken expires
Step 7: POST /auth/logout      → invalidate the session
```

> **Admin routes** require `role: "admin"` on the user record in addition to a valid JWT.

---

## 2. Auth — `/auth`

| # | Method | Path | Auth | Description |
|---|--------|------|------|-------------|
| 1 | POST | `/auth/nonce` | ✗ | Generate a nonce for wallet signing |
| 2 | POST | `/auth/verify` | ✗ | Verify signature & login |
| 3 | POST | `/auth/refresh` | ✗ | Refresh an expired access token |
| 4 | POST | `/auth/logout` | ✗ | Invalidate session |

---

### 2.1 Generate Nonce

> `POST /auth/nonce` — **No Auth**

**Request Body:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `walletAddress` | string | Yes | EVM wallet address (0x...) |

**Example Request:**
```json
{
  "walletAddress": "0x1234567890abcdef1234567890abcdef12345678"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "nonce": "a1b2c3d4-e5f6-7890-abcd-ef1234567890"
}
```

**Error Response (400):**
```json
{
  "message": "Wallet address required"
}
```

**Postman Steps:**
1. Set method to `POST`
2. URL: `{{base_url}}/auth/nonce`
3. Body → raw → JSON
4. Enter `{ "walletAddress": "0x..." }`
5. Send → copy the `nonce` from response
6. Sign the nonce with your wallet (MetaMask) to get a `signature`

---

### 2.2 Verify Signature & Login

> `POST /auth/verify` — **No Auth**

**Request Body:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `walletAddress` | string | Yes | EVM wallet address |
| `signature` | string | Yes | Signature of the nonce signed by wallet |

**Example Request:**
```json
{
  "walletAddress": "0x1234567890abcdef1234567890abcdef12345678",
  "signature": "0xabcdef...123456"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "accessToken": "eyJhbGciOiJIUzI1NiIs...",
  "refreshToken": "eyJhbGciOiJIUzI1NiIs...",
  "role": "user",
  "walletAddress": "0x1234567890abcdef1234567890abcdef12345678"
}
```

**Error Response (401):**
```json
{
  "message": "Invalid signature"
}
```

**Postman Steps:**
1. Set method to `POST`
2. URL: `{{base_url}}/auth/verify`
3. Body → raw → JSON
4. Enter `{ "walletAddress": "0x...", "signature": "0x..." }`
5. Send → copy `accessToken` and `refreshToken`
6. Set Postman collection variable `token` = the access token

---

### 2.3 Refresh Access Token

> `POST /auth/refresh` — **No Auth**

**Request Body:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `refreshToken` | string | Yes | The refresh token from login |

**Example Request:**
```json
{
  "refreshToken": "eyJhbGciOiJIUzI1NiIs..."
}
```

**Success Response (200):**
```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIs..."
}
```

**Error Response (401):**
```json
{
  "message": "Refresh token required"
}
```

**Postman Steps:**
1. Set method to `POST`
2. URL: `{{base_url}}/auth/refresh`
3. Body → raw → JSON
4. Enter `{ "refreshToken": "your-refresh-token" }`
5. Send → update `{{token}}` variable with the new `accessToken`

---

### 2.4 Logout

> `POST /auth/logout` — **No Auth**

**Request Body:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `walletAddress` | string | Yes | Wallet to log out |

**Example Request:**
```json
{
  "walletAddress": "0x1234567890abcdef1234567890abcdef12345678"
}
```

**Success Response (200):**
```json
{
  "message": "Logout successful"
}
```

**Postman Steps:**
1. Set method to `POST`
2. URL: `{{base_url}}/auth/logout`
3. Body → raw → JSON
4. Enter `{ "walletAddress": "0x..." }`
5. Send → token is now invalidated on server

---

## 3. Users — `/users`

All endpoints in this section require **Bearer Token** auth.

| # | Method | Path | Auth | Description |
|---|--------|------|------|-------------|
| 5 | GET | `/users/profile` | ✓ | Get authenticated user's profile |
| 6 | PUT | `/users/profile` | ✓ | Update profile (multipart/form-data) |
| 7 | GET | `/users/preferences` | ✓ | Get user preferences |
| 8 | PUT | `/users/preferences` | ✓ | Update preferences |
| 9 | POST | `/users/watchlist` | ✓ | Add startup to watchlist |
| 10 | PUT | `/users/security` | ✓ | Update security settings |

---

### 3.1 Get Profile

> `GET /users/profile` — **Auth Required**

**Headers:** `Authorization: Bearer {{token}}`

**Success Response (200):**
```json
{
  "success": true,
  "user": {
    "walletAddress": "0x...",
    "username": "",
    "email": "",
    "profilePhoto": "",
    "watchlist": [],
    "settings": {
      "darkMode": false,
      "notifications": true
    },
    "security": {
      "twoFactorAuth": false,
      "loginAlerts": true
    }
  }
}
```

**Postman Steps:**
1. Set method to `GET`
2. URL: `{{base_url}}/users/profile`
3. Auth → Bearer Token → paste `{{token}}`
4. Send

---

### 3.2 Update Profile

> `PUT /users/profile` — **Auth Required** — `multipart/form-data`

**Headers:** `Authorization: Bearer {{token}}`  
**Content-Type:** `multipart/form-data`

**Form Fields:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `username` | string | No | Display name |
| `profilePhoto` | file | No | Image file (upload) |

**Success Response (200):**
```json
{
  "success": true,
  "message": "Profile updated",
  "user": {
    "walletAddress": "0x...",
    "username": "newUsername",
    "profilePhoto": "https://res.cloudinary.com/..."
  }
}
```

**Postman Steps:**
1. Set method to `PUT`
2. URL: `{{base_url}}/users/profile`
3. Auth → Bearer Token → `{{token}}`
4. Body → `form-data`
5. Add field `username` (text) and/or `profilePhoto` (file)
6. Send

---

### 3.3 Get Preferences

> `GET /users/preferences` — **Auth Required**

**Headers:** `Authorization: Bearer {{token}}`

**Success Response (200):**
```json
{
  "success": true,
  "settings": {
    "darkMode": false,
    "notifications": true
  }
}
```

**Postman Steps:**
1. Set method to `GET`
2. URL: `{{base_url}}/users/preferences`
3. Auth → Bearer Token → `{{token}}`
4. Send

---

### 3.4 Update Preferences

> `PUT /users/preferences` — **Auth Required**

**Headers:** `Authorization: Bearer {{token}}`

**Request Body:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `darkMode` | boolean | No | Toggle dark mode |
| `notifications` | boolean | No | Toggle notifications |

**Example Request:**
```json
{
  "darkMode": true,
  "notifications": false
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Preferences updated",
  "preferences": {
    "darkMode": true,
    "notifications": false
  }
}
```

**Postman Steps:**
1. Set method to `PUT`
2. URL: `{{base_url}}/users/preferences`
3. Auth → Bearer Token → `{{token}}`
4. Body → raw → JSON
5. Send

---

### 3.5 Add to Watchlist

> `POST /users/watchlist` — **Auth Required**

**Headers:** `Authorization: Bearer {{token}}`

**Request Body:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `startupId` | string (ObjectId) | Yes | The startup to watch |

**Example Request:**
```json
{
  "startupId": "665abc123def456789012345"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Startup added to watchlist",
  "watchlist": ["665abc123def456789012345"]
}
```

**Postman Steps:**
1. Set method to `POST`
2. URL: `{{base_url}}/users/watchlist`
3. Auth → Bearer Token → `{{token}}`
4. Body → raw → JSON
5. Send

---

### 3.6 Update Security Settings

> `PUT /users/security` — **Auth Required**

**Headers:** `Authorization: Bearer {{token}}`

**Request Body:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `twoFactorAuth` | boolean | No | Enable 2FA |
| `loginAlerts` | boolean | No | Enable login alerts |

**Example Request:**
```json
{
  "twoFactorAuth": true,
  "loginAlerts": true
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Security settings updated",
  "security": {
    "twoFactorAuth": true,
    "loginAlerts": true
  }
}
```

**Postman Steps:**
1. Set method to `PUT`
2. URL: `{{base_url}}/users/security`
3. Auth → Bearer Token → `{{token}}`
4. Body → raw → JSON
5. Send

---

## 4. Startups — `/startups`

| # | Method | Path | Auth | Description |
|---|--------|------|------|-------------|
| 11 | POST | `/startups/apply` | ✗ | Submit a startup application |
| 12 | GET | `/startups` | ✗ | Get all startups |
| 13 | GET | `/startups/search?keyword=` | ✗ | Search startups by keyword |
| 14 | GET | `/startups/:id` | ✗ | Get startup by ID |
| 15 | PATCH | `/startups/:id` | ✗ | Update startup details |
| 16 | DELETE | `/startups/:id` | ✗ | Delete startup |

---

### 4.1 Submit Startup Application

> `POST /startups/apply` — **No Auth**

**Request Body:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `startupName` | string | Yes | Startup name |
| `founderName` | string | Yes | Founder's full name |
| `email` | string | Yes | Founder's email address |
| `linkedInProfile` | string | Yes | Founder's LinkedIn profile URL |

**Example Request:**
```json
{
  "startupName": "My Startup",
  "founderName": "Jane Doe",
  "email": "jane@example.com",
  "linkedInProfile": "https://linkedin.com/in/janedoe"
}
```

**Success Response (201):**
```json
{
  "success": true,
  "startupId": "665abc123def456789012345",
  "data": {
    "startupName": "My Startup",
    "founderName": "Jane Doe",
    "email": "jane@example.com",
    "linkedInProfile": "https://linkedin.com/in/janedoe",
    "_id": "665abc123def456789012345",
    "createdAt": "2025-01-01T00:00:00.000Z",
    "updatedAt": "2025-01-01T00:00:00.000Z"
  }
}
```

**Error Response (500):**
```json
{
  "success": false,
  "message": "Error message"
}
```

**Postman Steps:**
1. Set method to `POST`
2. URL: `{{base_url}}/startups/apply`
3. Body → raw → JSON
4. Enter the request body with `startupName`, `founderName`, `email`, `linkedInProfile`
5. Send

---

### 4.2 Get All Startups

> `GET /startups` — **No Auth**

**Success Response (200):**
```json
{
  "success": true,
  "count": 2,
  "startups": [
    {
      "_id": "665abc...",
      "startupName": "My Startup",
      "founderName": "Jane Doe",
      "email": "jane@example.com",
      "linkedInProfile": "https://linkedin.com/in/janedoe"
    }
  ]
}
```

**Postman Steps:**
1. Set method to `GET`
2. URL: `{{base_url}}/startups`
3. Send

---

### 4.3 Search Startups

> `GET /startups/search?keyword=...` — **No Auth**

**Query Parameters:**

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `keyword` | string | No | Search keyword (matches name, description) |

**Example URL:** `{{base_url}}/startups/search?keyword=fintech`

**Success Response (200):**
```json
{
  "success": true,
  "count": 3,
  "startups": [ ... ]
}
```

**Postman Steps:**
1. Set method to `GET`
2. URL: `{{base_url}}/startups/search?keyword=fintech`
3. Send

---

### 4.4 Get Startup by ID

> `GET /startups/:id` — **No Auth**

**Path Parameters:**

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string (ObjectId) | Yes | Startup ID |

**Success Response (200):**
```json
{
  "success": true,
  "data": {
    "_id": "665abc...",
    "startupName": "My Startup",
    "founderName": "Jane Doe",
    "email": "jane@example.com",
    "linkedInProfile": "https://linkedin.com/in/janedoe"
  }
}
```

**Error Response (404):**
```json
{
  "success": false,
  "message": "Startup not found"
}
```

**Postman Steps:**
1. Set method to `GET`
2. URL: `{{base_url}}/startups/665abc123def456789012345`
3. Send

---

### 4.5 Update Startup

> `PATCH /startups/:id` — **No Auth**

**Path Parameters:**

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string (ObjectId) | Yes | Startup ID |

**Request Body** (all fields optional):

| Field | Type | Description |
|-------|------|-------------|
| `startupName` | string | Update name |
| `founderName` | string | Update founder name |
| `email` | string | Update email |
| `linkedInProfile` | string | Update LinkedIn profile |

**Success Response (200):**
```json
{
  "success": true,
  "data": { ... }
}
```

**Error Response (404):**
```json
{
  "success": false,
  "message": "Startup not found"
}
```

**Postman Steps:**
1. Set method to `PATCH`
2. URL: `{{base_url}}/startups/665abc123def456789012345`
3. Body → raw → JSON
4. Send

---

### 4.6 Delete Startup

> `DELETE /startups/:id` — **No Auth**

**Path Parameters:**

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string (ObjectId) | Yes | Startup ID |

**Success Response (200):**
```json
{
  "success": true,
  "message": "Startup deleted successfully"
}
```

**Error Response (404):**
```json
{
  "success": false,
  "message": "Startup not found"
}
```

**Postman Steps:**
1. Set method to `DELETE`
2. URL: `{{base_url}}/startups/665abc123def456789012345`
3. Send

---

## 5. Notifications — `/users/notifications`

| # | Method | Path | Auth | Description |
|---|--------|------|------|-------------|
| 27 | POST | `/users/notifications` | ✓ | Create a notification |
| 28 | GET | `/users/notifications` | ✓ | Get all notifications for user |
| 29 | GET | `/users/notifications/unread-count` | ✓ | Get count of unread notifications |
| 30 | PATCH | `/users/notifications/read/:id` | ✓ | Mark single notification as read |
| 31 | PATCH | `/users/notifications/read-all` | ✓ | Mark all notifications as read |
| 32 | DELETE | `/users/notifications/:id` | ✓ | Delete a notification |

---

### 5.1 Create Notification

> `POST /users/notifications` — **Auth Required**

**Headers:** `Authorization: Bearer {{token}}`

**Request Body:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `title` | string | Yes | Notification title |
| `message` | string | Yes | Notification message body |
| `type` | string | No | One of: `price_alert`, `news`, `system`, `trade` (default: `system`) |

**Example Request:**
```json
{
  "title": "Price Alert",
  "message": "Token price increased by 15%",
  "type": "price_alert"
}
```

**Success Response (201):**
```json
{
  "success": true,
  "message": "Notification created successfully",
  "notification": {
    "userId": "0x...",
    "title": "Price Alert",
    "message": "Token price increased by 15%",
    "type": "price_alert",
    "isRead": false,
    "_id": "665abc..."
  }
}
```

**Postman Steps:**
1. Set method to `POST`
2. URL: `{{base_url}}/users/notifications`
3. Auth → Bearer Token → `{{token}}`
4. Body → raw → JSON
5. Send

---

### 5.2 Get Notifications

> `GET /users/notifications` — **Auth Required**

**Headers:** `Authorization: Bearer {{token}}`

**Success Response (200):**
```json
{
  "success": true,
  "count": 5,
  "notifications": [
    {
      "_id": "665abc...",
      "userId": "0x...",
      "title": "Price Alert",
      "message": "...",
      "type": "price_alert",
      "isRead": false,
      "createdAt": "2025-01-01T00:00:00.000Z"
    }
  ]
}
```

**Postman Steps:**
1. Set method to `GET`
2. URL: `{{base_url}}/users/notifications`
3. Auth → Bearer Token → `{{token}}`
4. Send

---

### 5.3 Get Unread Count

> `GET /users/notifications/unread-count` — **Auth Required**

**Headers:** `Authorization: Bearer {{token}}`

**Success Response (200):**
```json
{
  "success": true,
  "unreadCount": 3
}
```

**Postman Steps:**
1. Set method to `GET`
2. URL: `{{base_url}}/users/notifications/unread-count`
3. Auth → Bearer Token → `{{token}}`
4. Send

---

### 5.4 Mark Notification as Read

> `PATCH /users/notifications/read/:id` — **Auth Required**

**Headers:** `Authorization: Bearer {{token}}`

**Path Parameters:**

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string (ObjectId) | Yes | Notification ID |

**Success Response (200):**
```json
{
  "success": true,
  "message": "Notification marked as read",
  "notification": {
    "_id": "...",
    "isRead": true
  }
}
```

**Postman Steps:**
1. Set method to `PATCH`
2. URL: `{{base_url}}/users/notifications/read/665abc...`
3. Auth → Bearer Token → `{{token}}`
4. Body → none
5. Send

---

### 5.5 Mark All Notifications as Read

> `PATCH /users/notifications/read-all` — **Auth Required**

**Headers:** `Authorization: Bearer {{token}}`

**Success Response (200):**
```json
{
  "success": true,
  "message": "All notifications marked as read"
}
```

**Postman Steps:**
1. Set method to `PATCH`
2. URL: `{{base_url}}/users/notifications/read-all`
3. Auth → Bearer Token → `{{token}}`
4. Send

---

### 5.6 Delete Notification

> `DELETE /users/notifications/:id` — **Auth Required**

**Headers:** `Authorization: Bearer {{token}}`

**Path Parameters:**

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string (ObjectId) | Yes | Notification ID |

**Success Response (200):**
```json
{
  "success": true,
  "message": "Notification deleted successfully"
}
```

**Error Response (404):**
```json
{
  "success": false,
  "message": "Notification not found"
}
```

**Postman Steps:**
1. Set method to `DELETE`
2. URL: `{{base_url}}/users/notifications/665abc...`
3. Auth → Bearer Token → `{{token}}`
4. Send

---

## 6. Tokens — `/tokens`

| # | Method | Path | Auth | Description |
|---|--------|------|------|-------------|
| 33 | GET | `/tokens/:startupId/holders` | ✓ | Get token holders for a startup |

---

### 6.1 Get Token Holders

> `GET /tokens/:startupId/holders` — **Auth Required**

**Headers:** `Authorization: Bearer {{token}}`

**Path Parameters:**

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `startupId` | string (ObjectId) | Yes | Startup ID |

**Success Response (200):**
```json
{
  "success": true,
  "message": "Token holders fetched successfully",
  "data": [ ... ]
}
```

**Postman Steps:**
1. Set method to `GET`
2. URL: `{{base_url}}/tokens/665abc.../holders`
3. Auth → Bearer Token → `{{token}}`
4. Send

---

## 7. Oracle — `/oracle`

| # | Method | Path | Auth | Description |
|---|--------|------|------|-------------|
| 34 | POST | `/oracle/payload/sign` | ✗ | Generate a signed data payload |

---

### 7.1 Generate Signed Payload

> `POST /oracle/payload/sign` — **No Auth**

**Request Body:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `startupId` | string | Yes | Startup identifier |
| `score` | number | Yes | Numeric score |
| `valuation` | number | Yes | Valuation amount |
| `sentiment` | string | Yes | One of: `positive`, `neutral`, `negative` |

**Example Request:**
```json
{
  "startupId": "665abc123def456789012345",
  "score": 85,
  "valuation": 5000000,
  "sentiment": "positive"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "data": {
    "payload": "...",
    "signature": "0x..."
  }
}
```

**Error Response (validation fails):**
```json
{
  "success": false,
  "message": "\"score\" is required"
}
```

**Postman Steps:**
1. Set method to `POST`
2. URL: `{{base_url}}/oracle/payload/sign`
3. Body → raw → JSON
4. Enter all 4 fields
5. Send

---

## 8. Enquiry — `/enquiry`

| # | Method | Path | Auth | Description |
|---|--------|------|------|-------------|
| 35 | POST | `/enquiry` | ✗ | Submit an investor enquiry |
| 36 | GET | `/enquiry` | ✗ | Get all enquiries |

---

### 8.1 Submit Enquiry

> `POST /enquiry` — **No Auth**

**Request Body:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `fullName` | string | Yes | Full name |
| `email` | string | Yes | Email address |
| `investmentRange` | string | Yes | E.g. "$50k-$100k" |
| `interestedSectors` | string | Yes | E.g. "Fintech, Health" |
| `linkedin` | string | No | LinkedIn profile URL |
| `message` | string | No | Additional message |

**Example Request:**
```json
{
  "fullName": "Alice Smith",
  "email": "alice@example.com",
  "investmentRange": "$100k-$500k",
  "interestedSectors": "Fintech, AI",
  "linkedin": "https://linkedin.com/in/alice",
  "message": "Interested in early stage startups"
}
```

**Success Response (201):**
```json
{
  "success": true,
  "data": {
    "fullName": "Alice Smith",
    "email": "alice@example.com",
    "investmentRange": "$100k-$500k",
    "interestedSectors": "Fintech, AI",
    "linkedin": "...",
    "message": "...",
    "_id": "665abc..."
  }
}
```

**Postman Steps:**
1. Set method to `POST`
2. URL: `{{base_url}}/enquiry`
3. Body → raw → JSON
4. Enter the request body
5. Send

---

### 8.2 Get All Enquiries

> `GET /enquiry` — **No Auth**

**Success Response (200):**
```json
{
  "success": true,
  "data": [
    {
      "_id": "...",
      "fullName": "Alice Smith",
      "email": "alice@example.com",
      "investmentRange": "$100k-$500k",
      "interestedSectors": "Fintech, AI",
      "linkedin": "...",
      "message": "...",
      "createdAt": "..."
    }
  ]
}
```

**Postman Steps:**
1. Set method to `GET`
2. URL: `{{base_url}}/enquiry`
3. Send

---

## 9. Marketplace — `/marketplace`

| # | Method | Path | Auth | Description |
|---|--------|------|------|-------------|
| 37 | GET | `/marketplace/listings` | ✗ | Get all marketplace listings |
| 38 | GET | `/marketplace/:listingId` | ✗ | Get single listing details |
| 39 | GET | `/marketplace/history` | ✗ | Get marketplace trade history |

---

### 9.1 Get Listings

> `GET /marketplace/listings` — **No Auth**

**Success Response (200):**
```json
{
  "success": true,
  "data": [
    {
      "_id": "...",
      "startupId": { "_id": "...", "startupName": "..." },
      "sellerId": "...",
      "totalTokens": 10000,
      "availableTokens": 7500,
      "pricePerToken": 2.5,
      "tokenContractAddress": "0x...",
      "chainId": 1,
      "currency": "USDT",
      "listingType": "SELL",
      "status": "ACTIVE",
      "expiresAt": "2025-12-31T00:00:00.000Z"
    }
  ]
}
```

**Postman Steps:**
1. Set method to `GET`
2. URL: `{{base_url}}/marketplace/listings`
3. Send

---

### 9.2 Get Listing Details

> `GET /marketplace/:listingId` — **No Auth**

**Path Parameters:**

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `listingId` | string (ObjectId) | Yes | Marketplace listing ID |

**Success Response (200):**
```json
{
  "success": true,
  "data": {
    "_id": "...",
    "startupId": { ... },
    "sellerId": "...",
    "totalTokens": 10000,
    "availableTokens": 7500,
    "pricePerToken": 2.5,
    "listingType": "SELL",
    "status": "ACTIVE"
  }
}
```

**Postman Steps:**
1. Set method to `GET`
2. URL: `{{base_url}}/marketplace/665abc...`
3. Send

---

### 9.3 Get Marketplace History

> `GET /marketplace/history` — **No Auth**

**Success Response (200):**
```json
{
  "success": true,
  "data": [
    {
      "_id": "...",
      "listingId": "...",
      "buyerId": "...",
      "sellerId": "...",
      "tokenAmount": 100,
      "totalPrice": 250,
      "txHash": "0x...",
      "tradeStatus": "COMPLETED",
      "createdAt": "..."
    }
  ]
}
```

**Postman Steps:**
1. Set method to `GET`
2. URL: `{{base_url}}/marketplace/history`
3. Send

---

## 10. Presales — `/presales`

| # | Method | Path | Auth | Description |
|---|--------|------|------|-------------|
| 40 | GET | `/presales/active` | ✓ | Get active presales |
| 41 | GET | `/presales/upcoming` | ✓ | Get upcoming presales |
| 42 | GET | `/presales/completed` | ✓ | Get completed presales |

---

### 10.1 Get Active Presales

> `GET /presales/active` — **Auth Required**

**Headers:** `Authorization: Bearer {{token}}`

**Success Response (200):**
```json
{
  "success": true,
  "message": "Active presales fetched successfully",
  "data": [
    {
      "_id": "...",
      "startupId": { ... },
      "title": "Token Presale Round 1",
      "tokenPrice": 0.5,
      "totalTokens": 50000,
      "soldTokens": 12000,
      "minInvestment": 100,
      "maxInvestment": 10000,
      "startDate": "...",
      "endDate": "...",
      "status": "active"
    }
  ]
}
```

**Postman Steps:**
1. Set method to `GET`
2. URL: `{{base_url}}/presales/active`
3. Auth → Bearer Token → `{{token}}`
4. Send

---

### 10.2 Get Upcoming Presales

> `GET /presales/upcoming` — **Auth Required**

**Headers:** `Authorization: Bearer {{token}}`

**Success Response (200):**
```json
{
  "success": true,
  "message": "Upcoming presales fetched successfully",
  "data": [ ... ]
}
```

**Postman Steps:**
1. Set method to `GET`
2. URL: `{{base_url}}/presales/upcoming`
3. Auth → Bearer Token → `{{token}}`
4. Send

---

### 10.3 Get Completed Presales

> `GET /presales/completed` — **Auth Required**

**Headers:** `Authorization: Bearer {{token}}`

**Success Response (200):**
```json
{
  "success": true,
  "message": "Completed presales fetched successfully",
  "data": [ ... ]
}
```

**Postman Steps:**
1. Set method to `GET`
2. URL: `{{base_url}}/presales/completed`
3. Auth → Bearer Token → `{{token}}`
4. Send

---

## 11. Participation — `/participation`

| # | Method | Path | Auth | Description |
|---|--------|------|------|-------------|
| 43 | GET | `/participation/history` | ✓ | Get user's participation history |

---

### 11.1 Get Participation History

> `GET /participation/history` — **Auth Required**

**Headers:** `Authorization: Bearer {{token}}`

**Success Response (200):**
```json
{
  "success": true,
  "message": "Participation history fetched successfully",
  "data": [
    {
      "_id": "...",
      "userId": "...",
      "presaleId": { ... },
      "amount": 500,
      "tokens": 1000,
      "status": "confirmed",
      "createdAt": "..."
    }
  ]
}
```

**Postman Steps:**
1. Set method to `GET`
2. URL: `{{base_url}}/participation/history`
3. Auth → Bearer Token → `{{token}}`
4. Send

---

## 12. Analytics — `/analytics`

| # | Method | Path | Auth | Description |
|---|--------|------|------|-------------|
| 44 | GET | `/analytics/startups/:id` | ✗ | Get analytics for a specific startup |
| 45 | GET | `/analytics/trending` | ✗ | Get trending startups |
| 46 | GET | `/analytics/leaderboard` | ✗ | Get startup leaderboard |

---

### 12.1 Get Startup Analytics

> `GET /analytics/startups/:id` — **No Auth**

Validates `id` as a 24-character hex MongoDB ObjectId.

**Path Parameters:**

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string (24-char hex) | Yes | Startup ID |

**Success Response (200):**
```json
{
  "success": true,
  "data": { ... }
}
```

**Postman Steps:**
1. Set method to `GET`
2. URL: `{{base_url}}/analytics/startups/665abc123def456789012345`
3. Send

---

### 12.2 Get Trending Startups

> `GET /analytics/trending` — **No Auth**

**Success Response (200):**
```json
{
  "success": true,
  "data": [ ... ]
}
```

**Postman Steps:**
1. Set method to `GET`
2. URL: `{{base_url}}/analytics/trending`
3. Send

---

### 12.3 Get Leaderboard

> `GET /analytics/leaderboard` — **No Auth**

**Success Response (200):**
```json
{
  "success": true,
  "data": [ ... ]
}
```

**Postman Steps:**
1. Set method to `GET`
2. URL: `{{base_url}}/analytics/leaderboard`
3. Send

---

## 13. Admin — `/admin`

All admin endpoints require `role: "admin"` on the authenticated user's JWT.

| # | Method | Path | Auth | Description |
|---|--------|------|------|-------------|
| 47 | GET | `/admin/startups/pending` | ✓ (admin) | Get all pending startup applications |
| 48 | POST | `/admin/startups/:id/review` | ✓ (admin) | Mark startup as under review |
| 49 | POST | `/admin/startups/:id/approve` | ✓ (admin) | Approve startup |
| 50 | POST | `/admin/startups/:id/reject` | ✓ (admin) | Reject startup |
| 51 | PUT | `/admin/startups/:id/status` | ✓ (admin) | Manually update startup verification status |

---

### 13.1 Get Pending Startups

> `GET /admin/startups/pending` — **Admin Auth Required**

**Headers:** `Authorization: Bearer {{token}}` (admin user)

**Success Response (200):**
```json
{
  "success": true,
  "data": [
    {
      "_id": "...",
      "startupName": "Unverified Startup",
      "verificationStatus": "Pending",
      "userId": "0x..."
    }
  ]
}
```

**Postman Steps:**
1. Set method to `GET`
2. URL: `{{base_url}}/admin/startups/pending`
3. Auth → Bearer Token → `{{token}}` (admin user)
4. Send

---

### 13.2 Review Startup

> `POST /admin/startups/:id/review` — **Admin Auth Required**

Marks a startup's status as "under review".

**Headers:** `Authorization: Bearer {{token}}` (admin user)

**Path Parameters:**

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string (ObjectId) | Yes | Startup ID |

**Success Response (200):**
```json
{
  "success": true,
  "message": "Startup reviewed successfully",
  "data": { ... }
}
```

**Postman Steps:**
1. Set method to `POST`
2. URL: `{{base_url}}/admin/startups/665abc.../review`
3. Auth → Bearer Token → `{{token}}` (admin)
4. Send

---

### 13.3 Approve Startup

> `POST /admin/startups/:id/approve` — **Admin Auth Required**

**Headers:** `Authorization: Bearer {{token}}` (admin user)

**Path Parameters:**

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string (ObjectId) | Yes | Startup ID |

**Success Response (200):**
```json
{
  "success": true,
  "message": "Startup approved successfully",
  "data": { ... }
}
```

**Postman Steps:**
1. Set method to `POST`
2. URL: `{{base_url}}/admin/startups/665abc.../approve`
3. Auth → Bearer Token → `{{token}}` (admin)
4. Send

---

### 13.4 Reject Startup

> `POST /admin/startups/:id/reject` — **Admin Auth Required**

**Headers:** `Authorization: Bearer {{token}}` (admin user)

**Path Parameters:**

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string (ObjectId) | Yes | Startup ID |

**Success Response (200):**
```json
{
  "success": true,
  "message": "Startup rejected successfully",
  "data": { ... }
}
```

**Postman Steps:**
1. Set method to `POST`
2. URL: `{{base_url}}/admin/startups/665abc.../reject`
3. Auth → Bearer Token → `{{token}}` (admin)
4. Send

---

### 13.5 Update Startup Status

> `PUT /admin/startups/:id/status` — **Admin Auth Required**

**Headers:** `Authorization: Bearer {{token}}` (admin user)

**Path Parameters:**

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `id` | string (ObjectId) | Yes | Startup ID |

**Request Body:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `status` | string | Yes | Status value (e.g. "Pending", "Verified") |

**Example Request:**
```json
{
  "status": "Verified"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Startup status updated successfully",
  "data": { ... }
}
```

**Postman Steps:**
1. Set method to `PUT`
2. URL: `{{base_url}}/admin/startups/665abc.../status`
3. Auth → Bearer Token → `{{token}}` (admin)
4. Body → raw → JSON
5. Send

---

## 14. Waitlist — `/waitlist`

| # | Method | Path | Auth | Description |
|---|--------|------|------|-------------|
| 52 | POST | `/waitlist` | ✗ | Join the waitlist with an email |
| 53 | GET | `/waitlist` | ✗ | Get all waitlist entries |

---

### 14.1 Join Waitlist

> `POST /waitlist` — **No Auth**

**Request Body:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `email` | string | Yes | Email address to join waitlist |

**Example Request:**
```json
{
  "email": "user@example.com"
}
```

**Success Response (201):**
```json
{
  "success": true,
  "message": "Successfully joined waitlist",
  "user": {
    "email": "user@example.com",
    "_id": "665abc...",
    "createdAt": "2025-01-01T00:00:00.000Z",
    "updatedAt": "2025-01-01T00:00:00.000Z"
  }
}
```

**Error Response (500) — Duplicate Email:**
```json
{
  "success": false,
  "message": "Email already exists in waitlist"
}
```

**Postman Steps:**
1. Set method to `POST`
2. URL: `{{base_url}}/waitlist`
3. Body → raw → JSON
4. Enter `{ "email": "user@example.com" }`
5. Send

---

### 14.2 Get Waitlist

> `GET /waitlist` — **No Auth**

**Success Response (200):**
```json
{
  "success": true,
  "count": 2,
  "users": [
    {
      "_id": "665abc...",
      "email": "user1@example.com",
      "createdAt": "2025-01-01T00:00:00.000Z",
      "updatedAt": "2025-01-01T00:00:00.000Z"
    },
    {
      "_id": "665def...",
      "email": "user2@example.com",
      "createdAt": "2025-01-02T00:00:00.000Z",
      "updatedAt": "2025-01-02T00:00:00.000Z"
    }
  ]
}
```

**Postman Steps:**
1. Set method to `GET`
2. URL: `{{base_url}}/waitlist`
3. Send

---

## 15. Contact — `/contact`

| # | Method | Path | Auth | Description |
|---|--------|------|------|-------------|
| 54 | POST | `/contact/investor` | ✗ | Submit an investor contact email |
| 55 | GET | `/contact/investor` | ✗ | Get all investor contacts |

---

### 15.1 Submit Investor Contact

> `POST /contact/investor` — **No Auth**

**Request Body:**

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `email` | string | Yes | Investor email address |

**Example Request:**
```json
{
  "email": "investor@example.com"
}
```

**Success Response (201):**
```json
{
  "success": true,
  "message": "Investor enquiry submitted successfully",
  "investor": {
    "email": "investor@example.com",
    "_id": "665abc...",
    "createdAt": "2025-01-01T00:00:00.000Z",
    "updatedAt": "2025-01-01T00:00:00.000Z"
  }
}
```

**Error Response (500) — Duplicate Email:**
```json
{
  "success": false,
  "message": "Email already exists"
}
```

**Postman Steps:**
1. Set method to `POST`
2. URL: `{{base_url}}/contact/investor`
3. Body → raw → JSON
4. Enter `{ "email": "investor@example.com" }`
5. Send

---

### 15.2 Get All Investor Contacts

> `GET /contact/investor` — **No Auth**

**Success Response (200):**
```json
{
  "success": true,
  "count": 2,
  "investors": [
    {
      "_id": "665abc...",
      "email": "investor1@example.com",
      "createdAt": "2025-01-01T00:00:00.000Z",
      "updatedAt": "2025-01-01T00:00:00.000Z"
    },
    {
      "_id": "665def...",
      "email": "investor2@example.com",
      "createdAt": "2025-01-02T00:00:00.000Z",
      "updatedAt": "2025-01-02T00:00:00.000Z"
    }
  ]
}
```

**Postman Steps:**
1. Set method to `GET`
2. URL: `{{base_url}}/contact/investor`
3. Send

---

## 16. WebSocket (Socket.IO)

The server also provides real-time notifications via Socket.IO.

### Connection

```
ws://localhost:5000  (or your deployed URL)
```

### Client Events (from client → server)

| Event | Payload | Description |
|-------|---------|-------------|
| `join` | `"userId"` (string — walletAddress) | Join personal notification room |

### Server Events (from server → client)

| Event | Payload | Description |
|-------|---------|-------------|
| `newNotification` | `{ _id, userId, title, message, type, isRead, createdAt }` | Emitted when a notification is created for you |

### Testing with wscat

```bash
# Install wscat
npm install -g wscat

# Connect
wscat -c ws://localhost:5000

# Join a room (send this after connecting)
{"event": "join", "data": "0xYourWalletAddress"}
```

> **Note:** Postman's WebSocket support is limited and available only in the desktop app. For Socket.IO specifically, Postman's raw WebSocket client does not support the Socket.IO protocol handshake. Use `wscat` or a browser-based Socket.IO test client instead.

---

## 17. Postman Setup Guide

### Collection Setup

1. Open Postman → **Collections** → **New Collection**
2. Name: **Calip.io API**
3. Go to **Variables** tab and add:

| Variable | Initial Value | Current Value |
|----------|--------------|---------------|
| `base_url` | `http://localhost:5000` | `http://localhost:5000` |
| `token` | *(leave empty)* | *(populated after login)* |

### Authentication Setup

**Option A — Manual per-request:**  
Set `Authorization: Bearer {{token}}` on every protected route.

**Option B — Collection-level Auth:**  
1. Select the Calip.io API collection
2. Go to **Authorization** tab
3. Type: **Bearer Token**
4. Token: `{{token}}`
5. This auto-applies to all requests in the collection

### Folder Structure

Create folders inside the collection:

```
Calip.io API
├── Auth
├── Users
├── Startups
├── Notifications
├── Tokens
├── Oracle
├── Enquiry
├── Marketplace
├── Presales
├── Participation
├── Analytics
├── Admin
├── Waitlist
└── Contact
```

### Authentication Pre-request Script (Optional)

```javascript
// Example: Automatically refresh token if needed
const token = pm.collectionVariables.get("token");
if (!token) {
    console.log("No token found. Please run POST /auth/verify first.");
}
```

### Test Flow Example

1. `POST {{base_url}}/auth/nonce` → get nonce
2. Sign nonce with wallet → get signature
3. `POST {{base_url}}/auth/verify` → get tokens
4. Manually set `{{token}}` collection variable to the `accessToken`
5. Now test any protected endpoint (e.g. `GET {{base_url}}/users/profile`)

---

## 18. Quick Reference — All Routes

| # | Method | Path | Auth | Module |
|---|--------|------|------|--------|
| 1 | POST | `/auth/nonce` | ✗ | Auth |
| 2 | POST | `/auth/verify` | ✗ | Auth |
| 3 | POST | `/auth/refresh` | ✗ | Auth |
| 4 | POST | `/auth/logout` | ✗ | Auth |
| 5 | GET | `/users/profile` | ✓ | User |
| 6 | PUT | `/users/profile` | ✓ | User |
| 7 | GET | `/users/preferences` | ✓ | User |
| 8 | PUT | `/users/preferences` | ✓ | User |
| 9 | POST | `/users/watchlist` | ✓ | User |
| 10 | PUT | `/users/security` | ✓ | User |
| 11 | POST | `/startups/apply` | ✗ | Startup |
| 12 | GET | `/startups` | ✗ | Startup |
| 13 | GET | `/startups/search` | ✗ | Startup |
| 14 | GET | `/startups/:id` | ✗ | Startup |
| 15 | PATCH | `/startups/:id` | ✗ | Startup |
| 16 | DELETE | `/startups/:id` | ✗ | Startup |
| 17 | POST | `/users/notifications` | ✓ | Notification |
| 18 | GET | `/users/notifications` | ✓ | Notification |
| 19 | GET | `/users/notifications/unread-count` | ✓ | Notification |
| 20 | PATCH | `/users/notifications/read/:id` | ✓ | Notification |
| 21 | PATCH | `/users/notifications/read-all` | ✓ | Notification |
| 22 | DELETE | `/users/notifications/:id` | ✓ | Notification |
| 23 | GET | `/tokens/:startupId/holders` | ✓ | Token |
| 24 | POST | `/oracle/payload/sign` | ✗ | Oracle |
| 25 | POST | `/enquiry` | ✗ | Enquiry |
| 26 | GET | `/enquiry` | ✗ | Enquiry |
| 27 | GET | `/marketplace/listings` | ✗ | Marketplace |
| 28 | GET | `/marketplace/:listingId` | ✗ | Marketplace |
| 29 | GET | `/marketplace/history` | ✗ | Marketplace |
| 30 | GET | `/presales/active` | ✓ | Presale |
| 31 | GET | `/presales/upcoming` | ✓ | Presale |
| 32 | GET | `/presales/completed` | ✓ | Presale |
| 33 | GET | `/participation/history` | ✓ | Participation |
| 34 | GET | `/analytics/startups/:id` | ✗ | Analytics |
| 35 | GET | `/analytics/trending` | ✗ | Analytics |
| 36 | GET | `/analytics/leaderboard` | ✗ | Analytics |
| 37 | GET | `/admin/startups/pending` | ✓ (admin) | Admin |
| 38 | POST | `/admin/startups/:id/review` | ✓ (admin) | Admin |
| 39 | POST | `/admin/startups/:id/approve` | ✓ (admin) | Admin |
| 40 | POST | `/admin/startups/:id/reject` | ✓ (admin) | Admin |
| 41 | PUT | `/admin/startups/:id/status` | ✓ (admin) | Admin |
| 42 | POST | `/waitlist` | ✗ | Waitlist |
| 43 | GET | `/waitlist` | ✗ | Waitlist |
| 44 | POST | `/contact/investor` | ✗ | Contact |
| 45 | GET | `/contact/investor` | ✗ | Contact |

---

## Environment Variables (Server)

The server requires these environment variables (`.env` file):

```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/calipio
JWT_SECRET=your-jwt-secret-key
JWT_REFRESH_SECRET=your-jwt-refresh-secret
REDIS_URL=redis://localhost:6379
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
ORACLE_SECRET=your_oracle_secret
```
