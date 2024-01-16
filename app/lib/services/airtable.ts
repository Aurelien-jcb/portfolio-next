'use server';

import Airtable, { FieldSet, Records } from 'airtable';


if (!process.env.AIRTABLE_TOKEN || !process.env.AIRTABLE_BASE_ID) {
  throw new Error('Les clés API Airtable ne sont pas définies.');
}

const base = new Airtable({ apiKey: process.env.AIRTABLE_TOKEN }).base(process.env.AIRTABLE_BASE_ID);

export default base;