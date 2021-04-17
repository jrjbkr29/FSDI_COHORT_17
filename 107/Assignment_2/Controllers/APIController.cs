using Microsoft.AspNetCore.Mvc;
using taskManager.Models;
using System.Collections.Generic;
namespace taskManager.Controllers
{
    public class APIController : Controller
    {

        static List<Task> data;

        public APIController()
        {
            if(data == null)
            {
                data = new List<Task>();
            }
        }

        public IActionResult Test()
        {
            return Content("Im the API Controller");
        }

        [HttpPost]
        public IActionResult SaveTask([FromBody] Task theTask)
        {
            System.Console.WriteLine("Save tasks called!");
            System.Console.WriteLine(theTask.Title);
            // assign an ID
            theTask.ID = 9;

            // saving to DB
            data.Add(theTask);

            // retun the obj
            return Json(theTask);

        }

        [HttpGet]
        public IActionResult GetTasks()
        {
            return Json(data);
        }
    }
}