import pool from "../config/db.js";

export const createBasketService = async (itemData) => {
  const client = await pool.connect();
  try {
    const { itemname, quantity } = itemData;

    const result = await client.query(
      "INSERT INTO basket (itemname, quantity) VALUES ($1, $2) RETURNING *",
      [itemname, quantity]
    );
    return result.rows[0];
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  } finally {
    client.release();
  }
};

export const getItemByIdService = async (id) => {
  const client = await pool.connect();
  try {
    const result = await client.query("SELECT * FROM basket WHERE id = $1", [
      id,
    ]);

    console.log(result);
    if (result.rowCount === 1) {
      return result.rows[0];
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching user:", error);
    throw error;
  } finally {
    client.release();
  }
};

export const getAllItemsService = async () => {
  const client = await pool.connect();
  try {
    const result = await client.query("SELECT * FROM basket");
    return result.rows;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  } finally {
    client.release();
  }
};

export const deleteItemByIdService = async (id) => {
  const client = await pool.connect();
  try {
    const result = await client.query(
      "DELETE FROM basket WHERE id = $1 RETURNING *",
      [id]
    );

    return result.rows[0];
  } catch (error) {
    console.error("Error deleting user:", error);
    throw error;
  } finally {
    client.release();
  }
};
