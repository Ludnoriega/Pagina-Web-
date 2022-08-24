drop database if exists Plataforma;
Create database Plataforma;
use Plataforma;

CREATE TABLE Curso(
cod integer NOT NULL UNIQUE,
año varchar (1),
division varchar (1),
materias varchar (25),
Primary key (cod)
);

CREATE TABLE Alumno(
DNI integer NOT NULL,
nombre varchar (15),
apellido varchar (15),
curso integer,
usuario varchar (25),
contrasenia varchar (8),
contenidos varchar (300),
notas integer,
Primary key(DNI),
Foreign key(curso)REFERENCES Curso(cod));

CREATE TABLE Profesor(
DNI integer NOT NULL,
nombre varchar (20),
apellido varchar (20),
materias varchar (30),
usuario varchar (10),
contrania varchar (8),
Primary key (DNI)
);

CREATE TABLE Materia(
cod integer NOT NULL,
nombre varchar (25),
profesor varchar (30),
curso  integer,
notas float(3),
Primary key (cod),
Foreign Key (curso) REFERENCES Curso(cod)
);

CREATE TABLE Nota(
nota integer,
alumno integer,
Foreign key (nota) REFERENCES Materia (cod),
Foreign key(alumno)REFERENCES Alumno(DNI));

CREATE TABLE Profe_materia(
profeXmateria integer,
materias integer,
foreign key (profeXmateria) REFERENCES Profesor (DNI),
foreign key (materias) REFERENCES Materia (cod)
);