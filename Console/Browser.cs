using DotNetBrowser.Browser;
using DotNetBrowser.Engine;

namespace UserApp
{
    class Browser
    {
        private IBrowser browser;
        private IEngine engine;

        public Browser()
        {
            engine = EngineFactory.Create(new EngineOptions.Builder
            {
                LicenseKey = "1BNKDJZJSD5JSX2T6AJDS2HGMXDIUOJH0BAF0TCVHBK1U4KFKB7AADHKKHTU77Z9FE1GTE"
            }
            .Build());
            browser = engine.CreateBrowser();
        }

        public IBrowser Create(string name)
        {
            name = name.Replace(" ", "%20");
            string uri = $"http://crach3a2.beget.tech/player.php?Name={name}";
            uri = uri.Replace(" ", "");
            browser.Navigation.LoadUrl(uri);
            return browser;
        }

        public void Disp()
        {
            engine.Dispose();
            browser.Dispose();
        }
    }
}
