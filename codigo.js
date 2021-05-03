// Define un nuevo componente llamado tarea
Vue.component('tarea', {
    // El componente tarea ahora acepta una
    // "propiedad", que es como un atributo personalizado.
    // Esta propiedad es llamada tarea.
    props: ['tarea'],
    template: '<li>{{ tarea.nombre }}</li>'
})
var app = new Vue({
    el: '#app',
    data: {
        tareas: [
            { id: 0, nombre: 'Vegetales' },
            { id: 1, nombre: 'Queso' },
            { id: 2, nombre: 'Cualquier cosa que quieras pedir' }
        ]
    }
})

var desafio = new Vue({
    el: '#desafio',
    data: {
        id: '',
        nombreFrm: '',
        descripcionFrm: '',
        precioFrm: '',
        activarActualizar: false,
        actualizarId: -1,
        actualizarNombre: '',
        actualizarDescripcion: '',
        actualizarPrecio: '',
        productos: [
        ]
    },
    methods: {
        ingresarProducto: function () {
            this.productos.push({
                id: + new Date(),
                nombre: this.nombreFrm,
                descripcion: this.descripcionFrm,
                precio: this.precioFrm
            });
            this.nombreFrm = '';
            this.descripcionFrm = '';
            this.precioFrm = '';
        },
        actualizarProducto: function (idProducto) {
            // Antes de mostrar el formulario de actualizar, rellenamos sus campos
            this.actualizarId = idProducto;
            this.actualizarNombre = this.productos[idProducto].nombre;
            this.actualizarDescripcion = this.productos[idProducto].descripcion;
            this.actualizarPrecio = this.productos[idProducto].precio;
            // Mostramos el formulario
            this.activarActualizar = true;
        }


    }
})
Vue.component('nombre', {
    name: "nombre",
    props: ['producto'],
    template: '<div style="border-style: groove;padding-right: 150px;">{{producto.nombre}}</div>'
})
Vue.component('descripcion', {
    name: "descripcion",
    props: ['producto'],
    template: '<div style="border-style: groove;padding-right: 150px;">{{producto.descripcion}}</div>'
})
Vue.component('precio', {
    name: "precio",
    props: ['producto'],
    template: '<div style="border-style: groove;padding-right: 150px;">{{producto.precio}}</div>'
})
Vue.component('actualizar',{
    name: "actualizar",
    props: ['producto'],
    template: '<div style="border-style: groove;padding-right: 150px;">{{producto.id}}<button>Actualizar</button></div>'
})