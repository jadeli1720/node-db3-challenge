# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 77 records.

    SELECT P.productname as [Product Name], C.categoryname as [Category Name]
    FROM Products as P
    JOIN Categories as C
    ON P.categoryId = C.categoryId


### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records. 

**Dates will be a numerical YYYY-MM-DD string**
    SELECT  o.orderId AS [Order Id], o.orderDate AS [Order Date], s.shipperName AS [Shipper Name]
    FROM Orders AS O
    JOIN Shippers AS S
    ON o.shipperId = s.shipperId
    WHERE o.orderDate < '1997-01-09'


### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.
    
    SELECT OrderId as [Order Id], ProductName as [Product Names], Quantity
    FROM OrderDetails AS OD
    JOIN Products AS P
    ON od.productId = p.productId
    WHERE orderId = '10251'
    

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

    SELECT o.OrderId as [Order Id], c.CustomerName as [Customer Name], e.LastName as [Employee Last Name]
    FROM [Orders] AS O
    JOIN Customers AS C
    ON o.customerId = c.customerId
    JOIN Employees AS E
    ON o.employeeId = e.employeeId
    

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 8 records.

    SELECT c.categoryName as[Category Name], count(*) as Count
    FROM [Products] AS P
    JOIN Categories AS C
    ON p.categoryId = c.categoryId
    Group By p.categoryId


### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records.

    SELECT OrderId as [Order ID], count(*) as ItemCount 
    FROM [OrderDetails] AS OD
    JOIN Products AS P
    ON od.productId = p.productId
    Group By od.OrderId