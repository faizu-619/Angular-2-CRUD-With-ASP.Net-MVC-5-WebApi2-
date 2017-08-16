using System;
using System.Text;
using System.Collections.Generic;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using ExpenseTracker.Controllers.api;
using ETDAL;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Results;
using System.Net;

namespace ExpenseTracker.Tests.Controllers
{
    /// <summary>
    /// Summary description for CategoriesControllerTest
    /// </summary>
    [TestClass]
    public class CategoriesControllerTest
    {
        [TestMethod]
        public void PostCategoryTest()
        {
            ///// Arrange  
            //var controller = new CategoriesController();
            //Category category = new Category
            //{
            //    categoryName = "Test Category",
            //    categoryDesc = "Test Description",
            //};

            //// Act  
            //IHttpActionResult actionResult = Task.FromResult<> controller.PostCategory(category);
            //var contentResult = actionResult as NegotiatedContentResult<Category>;
            //Assert.IsNotNull(contentResult);
            //Assert.AreEqual(HttpStatusCode.Accepted, contentResult.StatusCode);
            //Assert.IsNotNull(contentResult.Content);
        }
    }
}
