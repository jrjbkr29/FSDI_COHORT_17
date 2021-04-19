using Microsoft.AspNetCore.Mvc;
using taskManager.Models;
using System.Collections.Generic;
using System.Linq;

namespace taskManager.Controllers

{
    public class APIController : Controller
    {

        static List<Task> data;
        static List<Contact> messagedata;

        DataContext dbContext;
        public APIController(DataContext db)
        {
            dbContext = db;
        }

        [HttpPost]
        public IActionResult SaveTask([FromBody] Task theTask)
        {
            System.Console.WriteLine("Save tasks called!");
            System.Console.WriteLine(theTask.Title);

            dbContext.Tasks.Add(theTask);
            dbContext.SaveChanges();

            // retun the obj
            return Json(theTask);

        }

        [HttpPost]
        public IActionResult SaveMessage([FromBody] Contact theMessage)
        {
            System.Console.WriteLine("Save Messages called!");
            System.Console.WriteLine(theMessage.Name);

            dbContext.Messages.Add(theMessage);
            dbContext.SaveChanges();

            // retun the obj
            return Json(theMessage);

        }

        [HttpGet]
        public IActionResult GetTasks()
        {
            var list = dbContext.Tasks.ToList();
            return Json(list);
        }

        [HttpGet]
        public IActionResult GetMessages()
        {
            var messList = dbContext.Messages.ToList();
            return Json(messList);
        }

        [HttpDelete]
        public IActionResult DelTask(int id)
        {
            // find the task
            Task t = dbContext.Tasks.Find(id);
            if (t == null)
            {
                return NotFound();
            }

            dbContext.Tasks.Remove(t);
            dbContext.SaveChanges();
            return Ok();
        }
    }
}