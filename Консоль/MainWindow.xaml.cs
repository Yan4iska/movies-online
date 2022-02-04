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
            string login = textBoxLogin.Text;
            string pass = textBoxPass.Password;
            string pass2 = textBoxPass2.Password;
            string email = Email.Text;
           
            try
            {
                if (login.Length > 3 && pass == pass2 && pass.Length > 5 && email.Contains("@") && email.Contains("."))
                {
                    Users user = new Users(login, pass, email);
                    db.Add(user);
                    userPage mainW = new userPage();
                    mainW.Show();
                    Hide();
                }
                else
                {
                    MessageBox.Show("error");
                }

            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
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