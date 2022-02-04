using System.Windows;
using System.Data.Entity;
using System.Data.SqlClient;
using System;
using System.Linq;
using MySqlConnector;

namespace UserApp
{
    public partial class MainWindow : Window
    {
        DataBase db = new DataBase();
        public MainWindow()
        {
            InitializeComponent();
        }

        private void Button_Reg_Click(object sender, RoutedEventArgs e)
        {
            string login = textBoxLogin.Text.Trim();
            string pass = textBoxPass.Password.Trim();
            string pass2 = textBoxPass2.Password.Trim();
            string email = Email.Text;

            textBoxLogin.ToolTip = "";
            textBoxLogin.Background = Brushes.Transparent;
            textBoxPass.ToolTip = "";
            textBoxPass.Background = Brushes.Transparent;


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
            else if (pass2 != pass)
            {
                textBoxPass2.ToolTip = "Incorrect input";
                textBoxPass2.Background = Brushes.DarkRed;
            }
            else if (!email.Contains("@") || !email.Contains("."))
            {
                Email.ToolTip = "Incorrect input";
            }
            else
            {
                textBoxLogin.ToolTip = "";
                textBoxLogin.Background = Brushes.Transparent;
                textBoxPass.ToolTip = "";
                textBoxPass.Background = Brushes.Transparent;

                Users user = new Users(login, pass, email);
                db.Add(user);
                userPage us = new userPage();
                us.Show();
                Hide();
            }
        }

        private void Button_Window_Auth_Click(object sender, RoutedEventArgs e)
        {
            Window1 mainW = new Window1();
            mainW.Show();
            Hide();
        }
    }
}
