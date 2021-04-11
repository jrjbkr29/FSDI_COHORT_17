using System;

namespace intro
{
    class Program
    {
        static void Main(string[] args)
        {
            Program p = new Program();

            System.Console.WriteLine("---Max of Three---");
            System.Console.WriteLine("Enter your first number:");
            float maxOfNum1 = float.Parse(Console.ReadLine());
            System.Console.WriteLine("Enter your second number:");
            float maxOfNum2 = float.Parse(Console.ReadLine());
            System.Console.WriteLine("Enter your third number:");
            float maxOfNum3 = float.Parse(Console.ReadLine());

            float maxOfThreeNum = p.MaxOfThree(maxOfNum1, maxOfNum2, maxOfNum3);
            System.Console.WriteLine("The greatest number is: " + maxOfThreeNum);
            System.Console.WriteLine("Press enter to continue...");
            Console.ReadLine();
            System.Console.WriteLine("");
            System.Console.WriteLine("-----------------------------");
            System.Console.WriteLine("Examples from class below this line");
            System.Console.WriteLine("-----------------------------");

            Console.WriteLine("Hello World!");

            p.TestVars();

            p.Numbers(); // print  numbers from 1 to 12

            int res = p.Sum(21, 21); // return the sum of two numbers
            System.Console.WriteLine(res);


            int min = p.MinOf(34545455, 431565); // return the minimum/lowest/smaller of two numbers
            System.Console.WriteLine(min);

            float max = p.MaxOf(45455.165f, 1565.1565f); // return the minimum/lowest/smaller of two numbers
            System.Console.WriteLine(max);
        }

        float MaxOfThree(float maxOfNum1, float maxOfNum2, float maxOfNum3)
        {
            return maxOfNum1 > maxOfNum2 && maxOfNum1 > maxOfNum3? maxOfNum1 : maxOfNum2 > maxOfNum3 ? maxOfNum2 : maxOfNum3;
        }

        int MinOf(int num1, int num2)
        {
            if(num1 < num2)
            {
                return num1;
            }
            else
            {
                return num2;
            }
        }


        float MaxOf(float num1, float num2)
        {
            return num1 > num2 ? num1 : num2;
        }

        int Sum(int num1, int num2)
        {
            return num1 + num2;
        }

        void TestVars() 
        {
            string name = "Johnny";
            int age = 30;
            /* unused example data types, removed to clear warnings
            float average = 324.4820f;
            decimal price = 19.99m;
            bool found = false;
            */
            Console.WriteLine(name);
            
            // if statements
            if(age > 100)
            {
                Console.WriteLine("Ouch, you're getting old!");
            }
            else
            {
                Console.WriteLine("You are still young!");
            }

            // for loop
            for(int i =0; i<10; i++)
            {
                Console.WriteLine("Hello there! --loop--");
            }

            
        }

         void Numbers()
    {
        for(int i=1; i<13; i++)
        {
            if(i != 7 && i != 9)
            {
                Console.WriteLine(i);
            }
         
        }
    }
        
    }

}
