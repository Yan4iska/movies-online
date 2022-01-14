using MySqlConnector;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;

namespace UserApp
{
    class DataBase
    {
        private string connection = "SERVER=crach3a2.beget.tech;DATABASE=crach3a2_databas;UID=crach3a2_databas;PASSWORD=Si1FVKNo;";
        private MySqlConnection connect;
        public DataBase()
        {
            try
            {
                connect = new MySqlConnection(connection);
            }
            catch (Exception ex)
            {
                MessageBox.Show(ex.Message);
            }
        }

        public void Add(Users user)
        {
            connect.Open();
            string sql = "INSERT INTO users (login, password, e-mail) "
                                                 + " values (@login, @pas, @email) ";
            MySqlCommand cmd = new MySqlCommand(sql, connect);

            cmd.Parameters.Add("@login", MySqlDbType.VarChar, 100).Value = user.Login;
            cmd.Parameters.Add("@pass", MySqlDbType.VarChar, 50).Value = user.Pass;
            cmd.Parameters.Add("@email", MySqlDbType.VarChar, 100).Value = user.Email;

            cmd.ExecuteNonQueryAsync();
            connect.Close();
        }

        public Users Select(string login, string pass)
        {
            MySqlCommand cmd = new MySqlCommand("SELECT * FROM users WHERE login = @login AND password = @pass", connect);
            cmd.Parameters.Add("@login", MySqlDbType.VarChar, 100).Value = login;
            cmd.Parameters.Add("@pass", MySqlDbType.VarChar, 50).Value = pass;
            Users user = new Users();
            connect.Open();
            MySqlDataReader reader = cmd.ExecuteReader();
            if (reader.Read())
            {
                user = new Users(reader.GetString(1), reader.GetString(2), reader.GetString(3));
            }
            connect.Close();
            return user;
        }

    }
}
