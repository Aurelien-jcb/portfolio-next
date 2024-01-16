'use server';
import base from './airtable';

export default async function getMenuEntries() {
  try {
    const entries = await base.table('Menu').select({
      view: 'Grid view',
    }).all();
    const links = entries.map((entry) => ({
      id: entry.id,
      label: entry.fields.label,
      url: entry.fields.url,
    }));
    return links;
  } catch (error) {
    console.error('Error fetching data from Airtable:', error);
    throw new Error('Unable to fetch menu entries from Airtable.');
  }
}