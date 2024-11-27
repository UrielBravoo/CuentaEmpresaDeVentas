const sequelize = require('../config/database')
const { Producto, Fabricante, Componente } = require('../models')





async function seed() {
    try {
        // Sincronizar la base de datos (recrear las tablas si no existen)
        await sequelize.sync({ force: true })
        console.log('Base de datos sincronizada')

        // ------------------------
        // Ejemplos de productos, compoenentes y fabricantes
        // ------------------------

        // Crear fabricantes
        const fabricante1 = await Fabricante.create({
            nombre: 'TechCorp',
            direccion: '1234 Elm Street',
            numeroContacto: '123-456-7890',
            pathImgPerfil: 'images/fabricantes/techcorp.jpg'
        })

        const fabricante2 = await Fabricante.create({
            nombre: 'Innovatech',
            direccion: '5678 Oak Avenue',
            numeroContacto: '098-765-4321',
            pathImgPerfil: 'images/fabricantes/innovatech.jpg'
        })

        const fabricante3 = await Fabricante.create({
            nombre: 'FutureWorks',
            direccion: '9012 Maple Drive',
            numeroContacto: '321-654-9870',
            pathImgPerfil: 'images/fabricantes/futureworks.jpg'
        })

        const fabricante4 = await Fabricante.create({
            nombre: 'MegaSolutions',
            direccion: '3456 Pine Lane',
            numeroContacto: '111-222-3333',
            pathImgPerfil: 'images/fabricantes/megasolutions.jpg'
        })

        // Crear componentes
        const componente1 = await Componente.create({
            nombre: 'Sensor de Temperatura',
            descripcion: 'Sensor que mide la temperatura en tiempo real.'
        })

        const componente2 = await Componente.create({
            nombre: 'Pantalla LCD',
            descripcion: 'Pantalla para visualización de datos.'
        })

        const componente3 = await Componente.create({
            nombre: 'Batería de Litio',
            descripcion: 'Batería recargable de 3.7V.'
        })

        const componente4 = await Componente.create({
            nombre: 'Conector USB-C',
            descripcion: 'Conector universal para carga y transferencia de datos.'
        })

        const componente5 = await Componente.create({
            nombre: 'Bluetooth Module',
            descripcion: 'Módulo Bluetooth para comunicación inalámbrica.'
        })

        // Crear productos
        const producto1 = await Producto.create({
            nombre: 'Termostato Inteligente',
            descripcion: 'Termostato que se conecta a Wi-Fi y ajusta la temperatura automáticamente.',
            precio: 150.0,
            pathImg: 'images/productos/termostato.jpg'
        })

        const producto2 = await Producto.create({
            nombre: 'Smartwatch',
            descripcion: 'Reloj inteligente con monitoreo de actividad física.',
            precio: 200.0,
            pathImg: 'images/productos/smartwatch.jpg'
        })

        const producto3 = await Producto.create({
            nombre: 'Sensor Ambiental',
            descripcion: 'Sensor que mide la humedad y calidad del aire.',
            precio: 80.0,
            pathImg: 'images/productos/sensor-ambiental.jpg'
        })

        const producto4 = await Producto.create({
            nombre: 'Controlador de Riego',
            descripcion: 'Controlador automático de sistemas de riego.',
            precio: 120.0,
            pathImg: 'images/productos/controlador-riego.jpg'
        })

        const producto5 = await Producto.create({
            nombre: 'Cámara de Seguridad',
            descripcion: 'Cámara de vigilancia de alta resolución con visión nocturna.',
            precio: 250.0,
            pathImg: 'images/productos/camara-seguridad.jpg'
        })

        const producto6 = await Producto.create({
            nombre: 'Control de Acceso',
            descripcion: 'Sistema de control de acceso biométrico.',
            precio: 300.0,
            pathImg: 'images/productos/control-acceso.jpg'
        })

        const producto7 = await Producto.create({
            nombre: 'Altavoz Inteligente',
            descripcion: 'Altavoz con asistente virtual integrado.',
            precio: 100.0,
            pathImg: 'images/productos/altavoz-inteligente.jpg'
        })

        const producto8 = await Producto.create({
            nombre: 'Cámara de Acción',
            descripcion: 'Cámara portátil resistente al agua y polvo.',
            precio: 180.0,
            pathImg: 'images/productos/camara-accion.jpg'
        })

        const producto9 = await Producto.create({
            nombre: 'Controlador de Iluminación',
            descripcion: 'Dispositivo para el control remoto de iluminación LED.',
            precio: 110.0,
            pathImg: 'images/productos/controlador-iluminacion.jpg'
        })

        const producto10 = await Producto.create({
            nombre: 'Cargador Inalámbrico',
            descripcion: 'Cargador para dispositivos compatibles con carga inalámbrica.',
            precio: 50.0,
            pathImg: 'images/productos/cargador-inalambrico.jpg'
        })

        // Asociar fabricantes a productos
        await producto1.addFabricantes([fabricante1, fabricante2])
        await producto2.addFabricante(fabricante3)
        await producto3.addFabricantes([fabricante1, fabricante4])
        await producto4.addFabricante(fabricante2)
        await producto5.addFabricantes([fabricante3, fabricante4])
        await producto6.addFabricante(fabricante1)
        await producto7.addFabricante(fabricante2)
        await producto8.addFabricante(fabricante3)
        await producto9.addFabricantes([fabricante2, fabricante4])
        await producto10.addFabricante(fabricante4)

        // Asociar componentes a productos
        await producto1.addComponentes([componente1, componente2])
        await producto2.addComponentes([componente2, componente3])
        await producto3.addComponentes([componente1, componente4])
        await producto4.addComponentes([componente3, componente5])
        await producto5.addComponentes([componente2, componente4, componente5])
        await producto6.addComponentes([componente1, componente5])
        await producto7.addComponentes([componente3, componente4])
        await producto8.addComponentes([componente4, componente5])
        await producto9.addComponentes([componente2, componente3])
        await producto10.addComponentes([componente1, componente4, componente5])

        console.log('Base de datos poblada con datos de ejemplo')
    } catch (error) {
        console.error('Error al poblar la base de datos:', error)
    }
}

module.exports = seed
