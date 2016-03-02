using OpenQA.Selenium;
using OpenQA.Selenium.Firefox;
using OpenRnD.Harness.IISExpress;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OpenRnD.AppNgine.Tests
{
    public class NgineTestContext : IDisposable
    {
        public int ServerPort { get; } = 5555;
        public IISExpressHarness Harness { get; set; }
        public IWebDriver WebDriver { get; set; }

        public NgineTestContext()
        {
            Harness = new IISExpressHarness("../../../OpenRnD.AppNgine.Tests.Web", ServerPort);
            WebDriver = new FirefoxDriver();

            WebDriver.Navigate().GoToUrl($"http://localhost:{ServerPort}/Test.html");
        }

        public void Dispose()
        {
            Harness.Dispose();
            WebDriver.Dispose();
        }
    }
}
