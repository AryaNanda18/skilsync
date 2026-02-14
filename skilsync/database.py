import psycopg2

def get_connection():
    conn = psycopg2.connect(
        host="localhost",
        database="skilsync",  # make sure this DB exists
        user="postgres",
        password="root123"    # your PostgreSQL password
    )
    return conn
