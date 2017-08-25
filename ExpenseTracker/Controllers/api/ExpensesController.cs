using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using ETDAL;
using ExpenseTracker.Models;

namespace ExpenseTracker.Controllers.api
{
    public class ExpensesController : ApiController
    {
        private DataModel db = new DataModel();

        // GET: api/Expenses
        public IQueryable<ExpenseViewModel> GetExpenses()
        {
            //var query = (from expense in db.Expenses
            //             join category in db.Categories on expense.categoryID equals category.categoryID
            //             select expense.expenseID).ToList();
            var data = db.Expenses
                .Join(db.Categories,
                expenses => expenses.categoryID,
                category => category.categoryID,
                (expenses, category) => new ExpenseViewModel { expenseID = expenses.expenseID, expenseAmount = expenses.expenseAmount, expenseDate = expenses.expenseDate, expenseDesc = expenses.expenseDesc, categoryID = expenses.categoryID, categoryName = category.categoryName, transactionType = expenses.transactionType });
            return data;//db.Expenses;
        }

        // GET: api/Expenses/5
        [ResponseType(typeof(Expense))]
        public async Task<IHttpActionResult> GetExpense(int id)
        {
            Expense expense = await db.Expenses.FindAsync(id);
            if (expense == null)
            {
                return NotFound();
            }

            return Ok(expense);
        }

        // PUT: api/Expenses/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutExpense(int id, Expense expense)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != expense.expenseID)
            {
                return BadRequest();
            }

            db.Entry(expense).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ExpenseExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Expenses
        [ResponseType(typeof(Expense))]
        public async Task<IHttpActionResult> PostExpense(Expense expense)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Expenses.Add(expense);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = expense.expenseID }, expense);
        }

        // DELETE: api/Expenses/5
        [ResponseType(typeof(Expense))]
        public async Task<IHttpActionResult> DeleteExpense(int id)
        {
            Expense expense = await db.Expenses.FindAsync(id);
            if (expense == null)
            {
                return NotFound();
            }

            db.Expenses.Remove(expense);
            await db.SaveChangesAsync();

            return Ok(expense);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ExpenseExists(int id)
        {
            return db.Expenses.Count(e => e.expenseID == id) > 0;
        }
    }
}