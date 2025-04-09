'use client';

import React, { useState } from 'react';

interface UploadFileProps {
    id: number;
    name: string;
    link: string;
}
const JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJiNzJjNGY5Mi1iNjZjLTRkY2QtODhkMC1lMzcwNTA5ZTE5MzciLCJlbWFpbCI6ImpvbmFoc21pdGgyMDEwQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJwaW5fcG9saWN5Ijp7InJlZ2lvbnMiOlt7ImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxLCJpZCI6IkZSQTEifSx7ImRlc2lyZWRSZXBsaWNhdGlvbkNvdW50IjoxLCJpZCI6Ik5ZQzEifV0sInZlcnNpb24iOjF9LCJtZmFfZW5hYmxlZCI6ZmFsc2UsInN0YXR1cyI6IkFDVElWRSJ9LCJhdXRoZW50aWNhdGlvblR5cGUiOiJzY29wZWRLZXkiLCJzY29wZWRLZXlLZXkiOiI1ZmExYTkzZDFiYzk5Mjg2ZDQyOSIsInNjb3BlZEtleVNlY3JldCI6Ijc4ZTU2ZWFlZTFiNDRkMTI3ZWMzNjY3NDc5Zjg0NjEwZWE4NWI5YzExZjUwZDBlZTVmNzA4ZWE5MjQ2ZjEyNWQiLCJleHAiOjE3NzExNzkwMjJ9.f4LWKNRakJOeghI5Cktbkn9SGhv7ULHGZp9qKCO56u8"; // Replace with your actual Pinata JWT

export const addGroup = async (username: string, password: string): Promise<boolean> => {
    const uploadUrl = "https://uploads.pinata.cloud/v3/files";
    const groupUrl = "https://api.pinata.cloud/v3/groups/public";
    const accountGroupID = `3867ce0c-ddf1-475b-985b-0de4e3388a0f`;
    
    try {
        // Step 1: Create a JSON file from the username and password
        const jsonData = JSON.stringify({ username, password });
        const file = new File([jsonData], `accountDetails.json`, { type: "application/json" });

        // Step 2: Upload the file to Pinata
        const formData = new FormData();
        formData.append("file", file);
        formData.append("network", "public");

        const uploadRequest = await fetch(uploadUrl, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${JWT}`,
            },
            body: formData,
        });

        if (!uploadRequest.ok) {
            throw new Error(`Error uploading file to Pinata: ${uploadRequest.statusText}`);
        }

        const uploadResponse = await uploadRequest.json();
        const fileId = retrieveCID("accountDetails",username); // Adjust based on the actual response structure
        console.log("File uploaded successfully:", uploadResponse);
        console.log("File ID:", fileId);
        // Step 3: Add the file to the group
        const groupRequest = await fetch(`${groupUrl}/${accountGroupID}/ids/${fileId}`, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${JWT}`,
            },
        });

        if (!groupRequest.ok) {
            const errorDetails = await groupRequest.text();
            throw new Error(`Error adding file to group: ${groupRequest.statusText}, Details: ${errorDetails}`);
        }

        const groupResponse = await groupRequest.json();
        console.log("File added to group successfully:", groupResponse);

        return true;
    } catch (error) {
        console.error("Error in addGroup:", error);
        return false;
    }
};


export const retrieveCID = async (type: string, name: string): Promise<string | boolean> => {
    try {
        const url = `https://api.pinata.cloud/v3/files/public`;
        const request = await fetch(url, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${JWT}`,
            },
        });

        if (!request.ok) {
            throw new Error(`Error retrieving files: ${request.statusText}`);
        }

        const response = await request.json();
        console.log("Response from Pinata:", response);

        // Access the files array from the response
        const files = response.data?.files || [];
        
        // Iterate through the files to find the one with the matching username
        console.log("test",files[0].keyvalues);
        for (const file of files) {
            if (file.metadata && file.metadata.username === name) {
                console.log("File found:", file);
                return file.cid; // Return the CID of the matching file
            }
        }

        console.log("File not found with the specified username.");
        return false; // Return false if no matching file is found
    } catch (error) {
        console.error("Error in retrieveCID:", error);
        return false;
    }
};

export const uploadToPinata = async (name: string, link: string): Promise<boolean> => {
    const jsonUrl = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;

    const jsonData = {
        name: name,
        link: link
    };
    

    try {
        // Upload JSON data
        const jsonResponse = await fetch(jsonUrl, {
            method: 'POST',
            body: JSON.stringify(jsonData),
            headers: {
                'Content-Type': 'application/json',
                'pinata_api_key': '5fa1a93d1bc99286d429',
                'pinata_secret_api_key': '78e56eaee1b44d127ec3667479f84610ea85b9c11f50d0ee5f708ea9246f125d'
            }
        });

        if (!jsonResponse.ok) {
            throw new Error(`Error uploading JSON to Pinata: ${jsonResponse.statusText}`);
        }

        const jsonResult = await jsonResponse.json();
        console.log(jsonResult.IpfsHash);

        return true;
    } catch (error) {
        console.error('Error uploading to Pinata:', error);
        return false;
    }
};

// New method to receive all CID numbers and store them in a list
export const storeCidNumbers = (cidNumbers: string[]): string[] => {
    const cidList: string[] = [];

    cidNumbers.forEach(cid => {
        cidList.push(cid);
    });

    return cidList;
};

export const updatePinata = async (email: string, username: string, password: string): Promise<boolean> => {
    // Implement the update logic here
    // This is a placeholder function
    return true;
};

export const retrieveFromPinata = async (groupName: string): Promise<any> => {
    const url = `https://api.pinata.cloud/data/pinList?status=pinned&group=${groupName}`;

    try {
        const response = await fetch(url, {
            headers: {
                'pinata_api_key': '5fa1a93d1bc99286d429', 
                'pinata_secret_api_key': '78e56eaee1b44d127ec3667479f84610ea85b9c11f50d0ee5f708ea9246f125d' 
            }
        });

        if (!response.ok) {
            throw new Error(`Error retrieving from Pinata: ${response.statusText}`);
        }

        const result = await response.json();
        const allData: { [key: string]: any } = {};

        for (const pin of result.rows) {
            const cid = pin.ipfs_pin_hash;
            const dataUrl = `https://gateway.pinata.cloud/ipfs/${cid}`;
            const dataResponse = await fetch(dataUrl);

            if (!dataResponse.ok) {
                throw new Error(`Error retrieving data for CID ${cid}: ${dataResponse.statusText}`);
            }

            const dataResult = await dataResponse.json();
            allData[cid] = dataResult;
        }

        return allData;
    } catch (error) {
        console.error('Error retrieving from Pinata:', error);
        throw error;
    }
};

export default retrieveFromPinata; uploadToPinata; addGroup;