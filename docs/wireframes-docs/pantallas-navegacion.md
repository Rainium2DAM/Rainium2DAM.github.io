---
sidebar_position: 1
title: 🗺️ Mapa de Pantallas y Navegación
---

![Mapa de pantallas](./img/mapa-pantallas.png)

# 🗺️ Mapa de Pantallas y Navegación

El diseño de la aplicación "TRAINIUM" se basa en una estructura clara con la **Barra de Navegación Inferior** como elemento central para la transición entre las principales funcionalidades.

## Estructura y Vínculos Principales

| Pantalla (Wireframe) | Propósito Principal | Navegación desde | Navegación hacia |
| :--- | :--- | :--- | :--- |
| ![Sistema de autenticación](./img/auth-system.png) | **Autenticación (Login/Registro)**. Punto de entrada de la aplicación. | Inicio de la aplicación. | Registro o Pantalla pricipal
| ![Registro de usuario](./img/register.png) | **Formulario de Registro**. Recolección de datos iniciales del usuario (peso, altura, DNI). | Registro | Seleccion de género
| ![Selección de genero](./img/gender.png) | **Selección de Género**. Paso de personalización inicial del perfil. | Selección de género | Pantalla pricipal |
| ![Pantalla principal](./img/machine-booking.png) | **Inicio (Home/Dashboard)**. Acceso rápido a reservas, seguimiento de peso y dieta. | Login/Register | Reserva / Retos de peso / Dietas
| ![Selección de maquinas](./img/seleccionmaquina.png) | **Reservar / Seleccionar Ejercicio**. Categorización para la reserva de máquinas específicas. | Barra de navegación / Pantalla principal | Selección de maquina
| ![Seleccion especifica de maquina](./img/seleccionmaquina.png) | **Seleccionar ejercicio especifico**. Reserva una maquina especificamente para el entrenamiento necesario | Reservar / Seleccionar Ejercicio | Inicio
| ![Seguimiento de usuario](./img/progress-tracking.png) | **Perfil / Seguimiento**. Muestra el control de peso (gráfico), IMC y porcentaje de grasa. | Barra de navegación / Pantalla principal | Inicio
| ![Planes de dietas](./img/diet-plans.png) | **Planes de dieta**. Receta, macronutrientes e ingredientes del "Plato del Día".| Pantalla Pricipal / Perfil usuario | Atrás |
| ![Suscripcion premium](./img/premium-subscription.png) | **Suscripción Premium**. Presentación de beneficios y selección de plan (Mensual/Anual). | Barra de navegación inferior ("Premium"). | Pago |
| ![Metodos de pago](./img/opcionespago.png) | **Seleccionar Método de Pago**. Opciones de pago (Tarjeta, Bizum, G Pay). | Subscripción Premium | Confirmación de pago |
| ![Confirmacion de pago](./img/confirmacionpago.png) | **Detalle de Pago (Google Pay)**. Modal de confirmación final de la transacción. | Opciones de pago | Pasarela de pago |

## 🧭 Barra de Navegación Inferior (Global)

La barra de navegación es un componente constante que asegura un acceso rápido a las funciones principales:

* **Inicio**
* **Reservar**
* **Premium**
* **Perfil**