'use client';

import React, { useState } from 'react';

interface UploadFileProps {
    email: string;
    username: string;
    password: string;
    wallets: string[];
}

export const uploadToPinata = async (email: string, username: string, password: string): Promise<boolean> => {
    const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;

    const jsonData = {
        email: email,
        username: username,
        password: password,
        wallets: [],
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(jsonData),
            headers: {
                'Content-Type': 'application/json',
                'pinata_api_key': '5fa1a93d1bc99286d429', // Replace with your actual Pinata API key
                'pinata_secret_api_key': '78e56eaee1b44d127ec3667479f84610ea85b9c11f50d0ee5f708ea9246f125d' // Replace with your actual Pinata Secret API key
            }
        });

        if (!response.ok) {
            throw new Error(`Error uploading to Pinata: ${response.statusText}`);
        }

        const result = await response.json();
        console.log(result.IpfsHash);
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

export const retrieveFromPinata = async (cid: string): Promise<any> => {
    const url = `https://gateway.pinata.cloud/ipfs/${cid}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`Error retrieving from Pinata: ${response.statusText}`);
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error retrieving from Pinata:', error);
        throw error;
    }
};


  