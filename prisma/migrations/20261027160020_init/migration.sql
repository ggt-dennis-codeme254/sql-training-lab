BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[categories] (
    [category_id] INT NOT NULL IDENTITY(1,1),
    [category_name] VARCHAR(100) NOT NULL,
    [description] VARCHAR(255),
    CONSTRAINT [categories_pkey] PRIMARY KEY CLUSTERED ([category_id])
);

-- CreateTable
CREATE TABLE [dbo].[suppliers] (
    [supplier_id] INT NOT NULL IDENTITY(1,1),
    [supplier_name] VARCHAR(150) NOT NULL,
    [contact_email] VARCHAR(150) NOT NULL,
    [country] VARCHAR(100),
    CONSTRAINT [suppliers_pkey] PRIMARY KEY CLUSTERED ([supplier_id])
);

-- CreateTable
CREATE TABLE [dbo].[products] (
    [product_id] INT NOT NULL IDENTITY(1,1),
    [product_name] VARCHAR(150) NOT NULL,
    [category_id] INT NOT NULL,
    [supplier_id] INT NOT NULL,
    [unit_price] DECIMAL(10,2) NOT NULL,
    [cost_price] DECIMAL(10,2) NOT NULL,
    [created_at] DATE NOT NULL,
    CONSTRAINT [products_pkey] PRIMARY KEY CLUSTERED ([product_id])
);

-- CreateTable
CREATE TABLE [dbo].[customers] (
    [customer_id] INT NOT NULL IDENTITY(1,1),
    [first_name] VARCHAR(100) NOT NULL,
    [last_name] VARCHAR(100) NOT NULL,
    [email] VARCHAR(150) NOT NULL,
    [city] VARCHAR(100) NOT NULL,
    [country] VARCHAR(100) NOT NULL,
    [registered_at] DATE NOT NULL,
    CONSTRAINT [customers_pkey] PRIMARY KEY CLUSTERED ([customer_id]),
    CONSTRAINT [customers_email_key] UNIQUE NONCLUSTERED ([email])
);

-- CreateTable
CREATE TABLE [dbo].[departments] (
    [department_id] INT NOT NULL IDENTITY(1,1),
    [department_name] VARCHAR(100) NOT NULL,
    [location] VARCHAR(100),
    CONSTRAINT [departments_pkey] PRIMARY KEY CLUSTERED ([department_id])
);

-- CreateTable
CREATE TABLE [dbo].[employees] (
    [employee_id] INT NOT NULL IDENTITY(1,1),
    [first_name] VARCHAR(100) NOT NULL,
    [last_name] VARCHAR(100) NOT NULL,
    [department_id] INT NOT NULL,
    [hire_date] DATE NOT NULL,
    [job_title] VARCHAR(100) NOT NULL,
    CONSTRAINT [employees_pkey] PRIMARY KEY CLUSTERED ([employee_id])
);

-- CreateTable
CREATE TABLE [dbo].[orders] (
    [order_id] INT NOT NULL IDENTITY(1,1),
    [customer_id] INT NOT NULL,
    [employee_id] INT,
    [order_date] DATE NOT NULL,
    [order_status] VARCHAR(30) NOT NULL,
    CONSTRAINT [orders_pkey] PRIMARY KEY CLUSTERED ([order_id])
);

-- CreateTable
CREATE TABLE [dbo].[order_items] (
    [order_item_id] INT NOT NULL IDENTITY(1,1),
    [order_id] INT NOT NULL,
    [product_id] INT NOT NULL,
    [quantity] INT NOT NULL,
    [unit_price] DECIMAL(10,2) NOT NULL,
    CONSTRAINT [order_items_pkey] PRIMARY KEY CLUSTERED ([order_item_id])
);

-- CreateTable
CREATE TABLE [dbo].[payments] (
    [payment_id] INT NOT NULL IDENTITY(1,1),
    [order_id] INT NOT NULL,
    [payment_date] DATE NOT NULL,
    [amount] DECIMAL(10,2) NOT NULL,
    [payment_method] VARCHAR(30) NOT NULL,
    [payment_status] VARCHAR(30) NOT NULL,
    CONSTRAINT [payments_pkey] PRIMARY KEY CLUSTERED ([payment_id])
);

-- CreateTable
CREATE TABLE [dbo].[warehouses] (
    [warehouse_id] INT NOT NULL IDENTITY(1,1),
    [warehouse_name] VARCHAR(100) NOT NULL,
    [city] VARCHAR(100) NOT NULL,
    [country] VARCHAR(100) NOT NULL,
    CONSTRAINT [warehouses_pkey] PRIMARY KEY CLUSTERED ([warehouse_id])
);

-- CreateTable
CREATE TABLE [dbo].[inventory] (
    [inventory_id] INT NOT NULL IDENTITY(1,1),
    [product_id] INT NOT NULL,
    [warehouse_id] INT NOT NULL,
    [quantity_in_stock] INT NOT NULL,
    [reorder_level] INT NOT NULL,
    [last_updated] DATE NOT NULL,
    CONSTRAINT [inventory_pkey] PRIMARY KEY CLUSTERED ([inventory_id]),
    CONSTRAINT [inventory_product_id_warehouse_id_key] UNIQUE NONCLUSTERED ([product_id],[warehouse_id])
);

-- CreateIndex
CREATE NONCLUSTERED INDEX [products_category_id_idx] ON [dbo].[products]([category_id]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [products_supplier_id_idx] ON [dbo].[products]([supplier_id]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [employees_department_id_idx] ON [dbo].[employees]([department_id]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [orders_customer_id_idx] ON [dbo].[orders]([customer_id]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [orders_employee_id_idx] ON [dbo].[orders]([employee_id]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [order_items_order_id_idx] ON [dbo].[order_items]([order_id]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [order_items_product_id_idx] ON [dbo].[order_items]([product_id]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [payments_order_id_idx] ON [dbo].[payments]([order_id]);

-- CreateIndex
CREATE NONCLUSTERED INDEX [inventory_warehouse_id_idx] ON [dbo].[inventory]([warehouse_id]);

-- AddForeignKey
ALTER TABLE [dbo].[products] ADD CONSTRAINT [products_category_id_fkey] FOREIGN KEY ([category_id]) REFERENCES [dbo].[categories]([category_id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[products] ADD CONSTRAINT [products_supplier_id_fkey] FOREIGN KEY ([supplier_id]) REFERENCES [dbo].[suppliers]([supplier_id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[employees] ADD CONSTRAINT [employees_department_id_fkey] FOREIGN KEY ([department_id]) REFERENCES [dbo].[departments]([department_id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[orders] ADD CONSTRAINT [orders_customer_id_fkey] FOREIGN KEY ([customer_id]) REFERENCES [dbo].[customers]([customer_id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[orders] ADD CONSTRAINT [orders_employee_id_fkey] FOREIGN KEY ([employee_id]) REFERENCES [dbo].[employees]([employee_id]) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[order_items] ADD CONSTRAINT [order_items_order_id_fkey] FOREIGN KEY ([order_id]) REFERENCES [dbo].[orders]([order_id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[order_items] ADD CONSTRAINT [order_items_product_id_fkey] FOREIGN KEY ([product_id]) REFERENCES [dbo].[products]([product_id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[payments] ADD CONSTRAINT [payments_order_id_fkey] FOREIGN KEY ([order_id]) REFERENCES [dbo].[orders]([order_id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[inventory] ADD CONSTRAINT [inventory_product_id_fkey] FOREIGN KEY ([product_id]) REFERENCES [dbo].[products]([product_id]) ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE [dbo].[inventory] ADD CONSTRAINT [inventory_warehouse_id_fkey] FOREIGN KEY ([warehouse_id]) REFERENCES [dbo].[warehouses]([warehouse_id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
