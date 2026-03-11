import dotenv from 'dotenv'
dotenv.config()

export const URLS = {
        URLSauceDemon:process.env.SAUCEDEMOURL
}

export const Credentials = {
        UsernameSauceDemo : process.env.SAUCEDEMO_USER,
        PasswordSauceDemo : process.env.SAUCEDEMOURL_PASWWORD
}