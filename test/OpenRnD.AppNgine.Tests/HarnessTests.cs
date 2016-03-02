using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium.Firefox;

namespace OpenRnD.AppNgine.Tests
{
    [TestClass]
    public class HarnessTests
    {
        [TestMethod]
        public void Harness_Works()
        {
            using (NgineTestContext context = new NgineTestContext())
            {
                Assert.AreEqual(expected: "Test", actual: context.WebDriver.PageSource);
            }
        }
    }
}
