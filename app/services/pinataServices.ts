'use client';

import React, { useState } from 'react';

interface UploadFileProps {
    id: number;
    name: string;
    link: string;
}

export const uploadToPinata = async (name: string, link: string): Promise<boolean> => {
    const jsonUrl = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;

    const jsonData = {
        name: name,
        link: link,
        group: "project"
    };

    try {
        // Upload JSON data
        const jsonResponse = await fetch(jsonUrl, {
            method: 'POST',
            body: JSON.stringify(jsonData),
            headers: {
                'Content-Type': 'application/json',
                'pinata_api_key': '5fa1a93d1bc99286d429', // Replace with your actual Pinata API key
                'pinata_secret_api_key': '78e56eaee1b44d127ec3667479f84610ea85b9c11f50d0ee5f708ea9246f125d' // Replace with your actual Pinata Secret API key
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
                'pinata_api_key': '5fa1a93d1bc99286d429', // Replace with your actual Pinata API key
                'pinata_secret_api_key': '78e56eaee1b44d127ec3667479f84610ea85b9c11f50d0ee5f708ea9246f125d' // Replace with your actual Pinata Secret API key
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

export default retrieveFromPinata; uploadToPinata;