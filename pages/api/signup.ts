// /pages/api/signup.ts
import { NextApiRequest, NextApiResponse } from "next";
import AWS from "aws-sdk";
import bcrypt from "bcryptjs";

// Initialize AWS DynamoDB
const dynamoDb = new AWS.DynamoDB.DocumentClient();

// Salt rounds for bcrypt hashing
const saltRounds = 10;

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        const { username, password, email } = req.body;

        // Hash the password before saving
        try {
            const hashedPassword = await bcrypt.hash(password, saltRounds);

            // Create user object to be saved in DynamoDB
            const user = {
                UserId: new Date().toISOString(), // Ensure the key is named UserId
                username,
                password: hashedPassword, // Store the hashed password
                email,
                createdAt: new Date().toISOString(),
            };

            const params = {
                TableName: "Users", // Replace with your actual DynamoDB table name
                Item: user,
            };

            // Save the user data in DynamoDB
            await dynamoDb.put(params).promise();
            res.status(200).json({ message: "Signup successful", user });
        } catch (error) {
            console.error("Error saving user:", error);
            res.status(500).json({
                error: `Error creating user: ${error.message}`,
            });
        }
    } else {
        res.status(405).json({ message: "Method Not Allowed" });
    }
}
