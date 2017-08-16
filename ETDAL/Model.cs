namespace ETDAL
{
    using System;
    using System.Data.Entity;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Linq;

    public partial class DataModel : DbContext
    {
        public DataModel()
            : base("name=DefaultConnection")
        {
        }

        public virtual DbSet<Category> Categories { get; set; }
        public virtual DbSet<Expense> Expenses { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Category>()
                .Property(e => e.categoryName)
                .IsUnicode(false);

            modelBuilder.Entity<Category>()
                .Property(e => e.categoryDesc)
                .IsUnicode(false);

            modelBuilder.Entity<Expense>()
                .Property(e => e.expenseAmount)
                .HasPrecision(18, 0);

            modelBuilder.Entity<Expense>()
                .Property(e => e.expenseDesc)
                .IsUnicode(false);

            modelBuilder.Entity<Expense>()
                .Property(e => e.transactionType)
                .IsUnicode(false);
        }
    }
}
