<?php

//------------->Proveedores
Route::post('/ingresar_proveedor', 'ProveedorController@IngresarProveedor');
Route::get('/traer_proveedores', 'ProveedorController@TraerProveedores');
Route::get('/ver_proveedor/{id}', 'ProveedorController@VerProveedor');
Route::get('/traer_giros', 'ProveedorController@TraerGiros');
Route::get('/traer_estados_prov', 'ProveedorController@TraerEstados');
//------------->Proveedores

//------------->Reuniones
Route::post('/ingresar_reunion', 'ReunionController@CrearReunion');
Route::get('/traer_reuniones', 'ReunionController@TraerReuniones');
//------------->Reuniones
