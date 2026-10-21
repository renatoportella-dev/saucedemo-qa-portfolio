-- SQL for QA practice only. Illustrative schema, NOT SauceDemo's database.
-- PostgreSQL compatible. Run in an isolated practice database.
BEGIN;
CREATE TEMP TABLE qa_orders (
  order_id INTEGER PRIMARY KEY,
  customer_id INTEGER NOT NULL,
  status TEXT NOT NULL,
  total NUMERIC(10,2) NOT NULL,
  created_at TIMESTAMP NOT NULL
);
INSERT INTO qa_orders (order_id, customer_id, status, total, created_at) VALUES
(101, 1, 'completed', 29.99, '2026-10-20 10:00:00'),
(102, 1, 'pending', 9.99, '2026-10-20 11:00:00'),
(103, 2, 'completed', 49.98, '2026-10-21 09:00:00'),
(104, 2, 'cancelled', 0.00, '2026-10-21 09:30:00');

-- QA-001: record totals by status.
SELECT status, COUNT(*) AS order_count, SUM(total) AS summed_total
FROM qa_orders
GROUP BY status ORDER BY status;

-- QA-002: inspect suspicious negative totals.
SELECT * FROM qa_orders WHERE total < 0;

-- QA-003: find customers who have more than one order.
SELECT customer_id, COUNT(*) AS order_count
FROM qa_orders GROUP BY customer_id HAVING COUNT(*) > 1;

-- QA-004: verify all completed orders have positive totals.
SELECT order_id FROM qa_orders WHERE status = 'completed' AND total <= 0;

-- QA-005: inspect orders chronologically.
SELECT order_id, status, total FROM qa_orders ORDER BY created_at ASC;

ROLLBACK; -- Keep practice data scoped to this exercise.
