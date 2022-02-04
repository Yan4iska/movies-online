using System.Linq;
using System.Windows;
using System.Windows.Media;

namespace UserApp
{
    /// <summary>
    /// Логика взаимодействия для Window1.xaml
    /// </summary>
    public partial class Window1 : Window
    {
        DataBase db = new DataBase();
        public Window1()
        {
            InitializeComponent();
        }

        private void Button_Auth_Click(object sender, RoutedEventArgs e)
        {
            textBoxLogin.ToolTip = "";
            textBoxLogin.Background = Brushes.Transparent;
            textBoxPass.ToolTip = "";
            textBoxPass.Background = Brushes.Transparent;

            string login = textBoxLogin.Text.Trim();
            string pass = textBoxPass.Password.Trim();

            if (login.Length < 5)
            {
                textBoxLogin.ToolTip = "Incorrect input";
                textBoxLogin.Background = Brushes.DarkRed;
            }
            else if (pass.Length < 3 || pass.Length > 10)
            {
                textBoxPass.ToolTip = "Incorrect input";
                textBoxPass.Background = Brushes.DarkRed;
            }
            else
            {
                textBoxLogin.ToolTip = "";
                textBoxLogin.Background = Brushes.Transparent;
                textBoxPass.ToolTip = "";
                textBoxPass.Background = Brushes.Transparent;

                Users user = db.Select(login, pass);
                if (user.Login == login && user.Pass == pass)
                {
                    userPage us = new userPage();
                    us.Show();
                    Hide();
                }
                else
                {
                    textBoxLogin.ToolTip = "";
                    textBoxPass.ToolTip = "";
                    MessageBox.Show("Not Found!!");
                }
            }
        }

        private void Button_Reg_Click(object sender, RoutedEventArgs e)
        {
            MainWindow mainW = new MainWindow();
            mainW.Show();
            Hide();
        }
    }
}
