using System;
using System.Windows;
using System.Windows.Controls;
using DotNetBrowser.Browser;

namespace UserApp
{
    /// <summary>
    /// Логика взаимодействия для userPage.xaml
    /// </summary>
    public partial class userPage : Window
    {
        //Browser browser = new Browser();
        public userPage()
        {
            InitializeComponent();
        }

        private void ScrollViewer_PreviewMouseWheel(object sender, System.Windows.Input.MouseWheelEventArgs e)
        {
            if (e.Delta > 0)
                scrol.LineLeft();
            else
                scrol.LineRight();
            e.Handled = true;
        }
        private void Button_Click(object sender, RoutedEventArgs e)
        {
            var senderBtn = sender as Button;
            //bro.InitializeFrom(browser.Create(senderBtn.Content.ToString()));
        }

        private void Window_Closed(object sender, EventArgs e)
        {
            //browser.Disp();
        }

        private void search_text_KeyDown(object sender, System.Windows.Input.KeyEventArgs e)
        {
            if (e.Key == System.Windows.Input.Key.Enter)
            {
                string name = search_text.Text;
                //bro.InitializeFrom(browser.Create(name));
            }
        }
    }
}
