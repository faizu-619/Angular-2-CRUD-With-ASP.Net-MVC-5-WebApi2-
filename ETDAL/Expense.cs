namespace ETDAL
{
    using System;
    using System.Collections.Generic;
    using System.ComponentModel.DataAnnotations;
    using System.ComponentModel.DataAnnotations.Schema;
    using System.Data.Entity.Spatial;

    [Table("Expense")]
    public partial class Expense
    {
        public int expenseID { get; set; }

        public DateTime? expenseDate { get; set; }

        public decimal? expenseAmount { get; set; }

        public int? categoryID { get; set; }

        [StringLength(250)]
        public string expenseDesc { get; set; }

        [StringLength(50)]
        public string transactionType { get; set; }
    }
}
