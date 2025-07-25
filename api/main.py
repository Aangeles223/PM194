from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from database import SessionLocal, engine
from models import Base, Fruta, Verdura
from fastapi.middleware.cors import CORSMiddleware

Base.metadata.create_all(bind=engine)
app = FastAPI()

"""uvicorn main:app --host 0.0.0.0 --port 8000"""

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Dependencia para obtener la DB
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/agregarfrutas/")
def crear_fruta(nombre: str, db: Session = Depends(get_db)):
    nueva = Fruta(nombre=nombre)
    db.add(nueva)
    db.commit()
    db.refresh(nueva)
    return nueva

@app.get("/frutas/")
def listar_frutas(db: Session = Depends(get_db)):
    frutas = db.query(Fruta).all()
    return [{"id": f.id, "nombre": f.nombre} for f in frutas]

@app.post("/agregarverduras/")
def crear_verdura(nombre: str, db: Session = Depends(get_db)):
    nueva = Verdura(nombre=nombre)
    db.add(nueva)
    db.commit()
    db.refresh(nueva)
    return nueva

@app.get("/verduras/")
def listar_verduras(db: Session = Depends(get_db)):
    verduras = db.query(Verdura).all()
    return [{"id": v.id, "nombre": v.nombre} for v in verduras]

@app.get("/productos/")
def listar_todos_los_productos(db: Session = Depends(get_db)):
    frutas = db.query(Fruta).all()
    verduras = db.query(Verdura).all()
    # Serializar los objetos a dict
    frutas_serializadas = [{"id": f.id, "nombre": f.nombre} for f in frutas]
    verduras_serializadas = [{"id": v.id, "nombre": v.nombre} for v in verduras]
    return {
        "frutas": frutas_serializadas,
        "verduras": verduras_serializadas
    }