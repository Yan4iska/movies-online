using System;
using System.Windows;
using System.Windows.Controls;
using CefSharp.Wpf;
using System.Windows.Navigation;
using CefSharp;
using System.Collections.Generic;
using System.Threading.Tasks;

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
                scrol.LineUp();
            else
                scrol.LineDown();
            e.Handled = true;
        }
        private void Button_Click(object sender, RoutedEventArgs e)
        {
            var senderBtn = sender as Button;
            string name = senderBtn.Content.ToString();
            name.Replace(" ", "%20");
            string str = "http://crach3a2.beget.tech/player.php?Name=" + name;
            NavigationWindow win = new NavigationWindow();
            win.Content = new Page1(str);
            win.WindowState = WindowState.Maximized;
            win.Show();
        }

        private void search_text_KeyDown(object sender, System.Windows.Input.KeyEventArgs e)
        {
            if (e.Key == System.Windows.Input.Key.Enter)
            {
                string name = search_text.Text;
                name.Replace(" ", "%20");
                string str = "http://crach3a2.beget.tech/player.php?Name=" + name;
                NavigationWindow win = new NavigationWindow();
                win.Content = new Page1(str);
                win.WindowState = WindowState.Maximized;
                win.Show();
            }
        }
    }
}
