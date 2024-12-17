# project-management-app

## Changing a pgAdmin 4 user's password

In the terminal, enter the following:

`sudo su postgres`

`psql`

`\password postgres`

You'll be prompted to enter the new password twice. This changes it for the user _postgres_.

To exit the Super User and postgres terminals, press `ctrl + D`
