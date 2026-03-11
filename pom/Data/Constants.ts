import dotenv from 'dotenv'
dotenv.config()

export const URLS = {
        URLSauceDemon:process.env.SAUCEDEMO_URL
}

export const Credentials = {
        UsernameSauceDemo : process.env.SAUCEDEMO_USER,
        PasswordSauceDemo : process.env.SAUCEDEMOURL_PASWWORD
}

export const UserInformation = {
        FirstName : process.env.FIRSTNAME,
        LastName : process.env.LASTNAME,
        PostalCode : process.env.POSTALCODE
}