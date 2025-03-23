# Sales Admin Panel API

## Database Setup
Create a local database named `sales_admin_panel`.

## Endpoints

### 1. Get Retailers of a Specific Wholesaler
**Endpoint:** `GET /wholesaler/:wholesaler_id/retailers`
- **Description:** Fetch all retailers associated with a specific wholesaler.
- **URL Parameters:**
  - `wholesaler_id` (integer) - ID of the wholesaler.

### 2. Get Monthly Turnover for Each Wholesaler
**Endpoint:** `GET /wholesaler/monthly-turnover`
- **Description:** Fetch monthly turnover for each wholesaler.

### 3. Get Retailers Associated with Only One Wholesaler
**Endpoint:** `GET /retailer/single-wholesaler`
- **Description:** Fetch retailers who are associated with only one wholesaler.

### 4. Get Wholesaler with Maximum Turnover
**Endpoint:** `GET /wholesaler/max-turnover`
- **Description:** Fetch the wholesaler with the highest total turnover.

## Insertion Queries

**Insert Wholesalers:**
```sql
INSERT INTO "Wholesalers" (name, mobile_number) VALUES ('Wholesaler A', '1234567890');
INSERT INTO "Wholesalers" (name, mobile_number) VALUES ('Wholesaler B', '0987654321');
```

**Insert Retailers:**
```sql
INSERT INTO "Retailers" (name, mobile_number, wholesaler_id) VALUES ('Retailer 1', '1111111111', 1);
INSERT INTO "Retailers" (name, mobile_number, wholesaler_id) VALUES ('Retailer 2', '2222222222', 1);
INSERT INTO "Retailers" (name, mobile_number, wholesaler_id) VALUES ('Retailer 3', '3333333333', 2);
```

**Insert Stocks:**
```sql
INSERT INTO "Stocks" (wholesaler_id, retailer_id, stock_amount, date) VALUES (1, 1, 1000, '2024-03-01');
INSERT INTO "Stocks" (wholesaler_id, retailer_id, stock_amount, date) VALUES (1, 2, 1500, '2024-03-01');
INSERT INTO "Stocks" (wholesaler_id, retailer_id, stock_amount, date) VALUES (2, 3, 2000, '2024-03-01');
```

---

**Note:** Make sure to update the `username` and `password` in `index.js` and `database.js` files as per your local setup.

