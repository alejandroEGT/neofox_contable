<template>
  <div>
    <div class="q-pa-md q-gutter-md">
      <div class="row justify-center">
        <div class="col-12 col-md-6">
          <q-card class="my-card">
            <!-- titulo  -->
            <q-card-section class="bg-primary text-white">
              <div class="text-h5 text-center">Reuniones</div>
            </q-card-section>

            <q-separator />

            <q-card-actions class="q-col-gutter-md text-center">
              <div class="col-12 col-md-4">
                <q-btn
                  class="full-width"
                  color="blue"
                  icon-right="work"
                  @click="crear_reunion"
                  label="Crear Reunion"
                />
              </div>
              <div class="col-12 col-md-4">
                <q-btn
                  class="full-width"
                  color="blue"
                  icon-right="format_list_numbered"
                  @click="traer_reuniones"
                  label="Reuniones"
                />
              </div>
              <div class="col-12 col-md-4">
                <q-btn
                  class="full-width"
                  color="red"
                  icon-right="settings_backup_restore"
                  @click="volver"
                  label="Volver"
                />
              </div>
            </q-card-actions>
          </q-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script src="../reuniones_js/moduloReuniones.js"></script>