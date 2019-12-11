export default {
    data() {
        return {
            separator: 'cell',
            loading: false,
            confirm: false,
            filter: '',
            campoUpd: null,
            select_estado: [],
            errores: [],
            value: false,

            visibleColumns: [
                'id',
                'codigo',
                'rut',
                'razon_social',
                'giro',
                'estado',
                'opciones'
            ],

            tabla: [
                { classes: 'ellipsis', name: 'id', align: 'center', label: 'ID', field: 'id', sortable: true },
                { classes: 'ellipsis', name: 'codigo', align: 'center', label: 'Codigo', field: 'codigo', sortable: true },
                { classes: 'ellipsis', name: 'rut', align: 'center', label: 'Rut', field: 'rut', sortable: true },
                { classes: 'ellipsis', name: 'razon_social', align: 'center', label: 'Razon Social', field: 'razon_social', sortable: true },
                { classes: 'ellipsis', name: 'giro', align: 'center', label: 'Giro', field: 'giro', sortable: true },
                { classes: 'ellipsis', name: 'estado', align: 'center', label: 'Estado', field: 'estado', sortable: true },
                { classes: 'ellipsis', name: 'opciones', align: 'center', label: 'Opciones', field: 'opciones', sortable: true },
                { classes: 'ellipsis', name: 'estado_id', align: 'center', label: 'Estado ID', field: 'estado_id', sortable: true },
            ],

            proveedores: [],

        }
    },

    methods: {
        traerProveedores() {
            axios.get('api/traer_proveedores').then((res) => {
                if (res.data.estado = 'success') {
                    this.proveedores = res.data.proveedores;
                } else {
                    this.$q.notify({
                        color: "red-4",
                        textColor: "white",
                        icon: "cloud_done",
                        message: res.data.mensaje
                    });
                }
            });
        },

        cambiarEstado($prov_id, $estado_id) {
            const data = {
                'id': $prov_id,
                'estado_id': $estado_id
            }

            axios.post('api/cambiar_estado_prov', data).then((res) => {
                if (res.data.estado == 'success') {
                    this.$q.notify({
                        color: "green-4",
                        textColor: "white",
                        icon: "cloud_done",
                        message: res.data.mensaje
                    });
                    this.onRefresh();
                } else {
                    this.$q.notify({
                        color: "red-4",
                        textColor: "white",
                        icon: "cloud_done",
                        message: res.data.mensaje
                    });
                }
            });
        },

        onRefresh() {
            this.loading = true;
            this.proveedores = [];
            this.traerProveedores();
            setTimeout(() => {
                this.loading = false;
            }, 5000)
        },
        volver() {
            this.$router.push('/modulo-proveedor');
        },

        traerEstado() {
            axios.get('api/traer_estados_prov').then((res) => {
                this.select_estado = res.data;
            });
        },

        verProveedor(id) {
            this.$router.push({
                name: 'VerProveedor',
                params: id,
            });
        }
        /* VerProveedor */
    },

    mounted() {
        this.traerProveedores();
        this.traerEstado();
    }
}
