/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('data', {
    timestamp_utc: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    timestamp_local: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    etautc: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    eta_local: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    state: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    event: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    captain: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    chiefengineer: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    latitude: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    longitude: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    period: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    sailing_time: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    total_running_hours_me: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    heading: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    course_made_good: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    speed_over_ground: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    speed_through_water: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    distance_over_ground: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    distance_through_water: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    water_depth: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    water_depth_below_keel: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    draft_forward: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    draft_aft: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    mean_draft: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    trim: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    air_temp: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    air_temp_weather_provider: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    engine_room_temp: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cooling_water_temp_lt: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    air_press: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    air_press_weather_provider: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sea_water_temp: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sea_water_temp_weather_provider: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sea_state: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    douglas_sea_scale: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    wind_speed_true: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    wind_speed_true_weather_provider: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    wind_speed_rel: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    wind_direction_true: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    wind_direction_true_weather_provider: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    wind_direction_rel: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    wave_height: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    wave_height_weather_provider: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    wave_direction: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    swell_height: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    swell_height_weather_provider: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    swell_direction: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    swell_direction_weather_provider: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    swell_period_weather_provider: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    visibility_weather_provider: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cargo_weight: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cargo_te_ufull: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cargo_te_uempty: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cargo_reefers: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    cargo_volume: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cargo_passengers: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ballast_weight: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    avg_shaft_rpm: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    avg_slip: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    total_foc: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    total_fociso: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    total_focme: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    total_focmeiso: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    total_focae: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    total_focaeiso: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    total_focab: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    total_focabiso: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    total_focigs: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    total_focigsiso: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    total_focinc: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    total_focinciso: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    total_fochfo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    total_fochfohs: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    total_fochfols: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    total_fochfolls: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    total_foclfo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    total_focmdo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    total_focmgo: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    total_foc_propane: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    total_foc_butane: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    total_foclng: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    total_foc_methanol: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    total_foc_ethanol: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    total_foc_undef: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    total_sfocme: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    total_sfocae: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    total_sfocmeiso: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    total_sfocaeiso: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    total_c_o2: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    total_c_o2_me: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    total_c_o2_ae: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    total_c_o2_ab: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    total_c_o2_igs: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    total_c_o2_inc: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    total_c_o2_undef: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    total_power_meavg: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    total_power_aeavg: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    total_generated_energy_me: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    total_generated_energy_ae: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    total_generated_electrical_energy: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    total_generated_shaft_energy: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    total_shaft_power_avg: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    total_shaft_power_corrected_avg: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    total_electrical_power_avg: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    me_load_avg: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ae_load_avg: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    delivered_powercorrected: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    eeoi_weight: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    eeoiteu: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    power_added_or_reduced_bywind: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    speed_loss: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    speed_loss_uncorrected: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    total_fuel_oil_rob: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    total_fresh_water_rob: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fuel_oil_hforob: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fuel_oil_hfohsrob: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fuel_oil_hfolsrob: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fuel_oil_hfollsrob: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fuel_oil_lforob: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fuel_oil_mdorob: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fuel_oil_mgorob: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fuel_oil_propane_rob: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fuel_oil_butane_rob: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fuel_oil_lngrob: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fuel_oil_methanol_rob: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fuel_oil_ethanol_rob: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    circulation_lub_oil_merob: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    circulation_lub_oil_aerob: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    circulation_lub_oil_undef_rob: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    total_circulation_lub_oil_rob: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cylinder_lub_oil_rob: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cylinder_hs_lub_oil_rob: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cylinder_ls_lub_oil_rob: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    undefined_lub_oil_rob: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fresh_water_drinking_rob: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fresh_water_boiler_rob: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fresh_water_undefined_rob: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    total_fuel_oil_bunkered: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fuel_oil_hfo_bunkered: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fuel_oil_hfohs_bunkered: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fuel_oil_hfols_bunkered: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fuel_oil_hfolls_bunkered: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fuel_oil_lfo_bunkered: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fuel_oil_mdo_bunkered: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fuel_oil_mgo_bunkered: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fuel_oil_propane_bunkered: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fuel_oil_butane_bunkered: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fuel_oil_lng_bunkered: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fuel_oil_methanol_bunkered: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fuel_oil_ethanol_bunkered: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    circulation_lub_oil_me_bunkered: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    circulation_lub_oil_ae_bunkered: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    circulation_lub_oil_undef_bunkered: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    total_circulation_lub_oil_bunkered: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cylinder_lub_oil_bunkered: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cylinder_hs_lub_oil_bunkered: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cylinder_ls_lub_oil_bunkered: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    undefined_lub_oil_bunkered: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    total_fuel_oil_gain_loss: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fuel_oil_hfo_gain_loss: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fuel_oil_hfohs_gain_loss: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fuel_oil_hfols_gain_loss: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fuel_oil_hfolls_gain_loss: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fuel_oil_lfo_gain_loss: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fuel_oil_mdo_gain_loss: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fuel_oil_mgo_gain_loss: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fuel_oil_propane_gain_loss: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fuel_oil_butane_gain_loss: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fuel_oil_lng_gain_loss: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fuel_oil_methanol_gain_loss: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fuel_oil_ethanol_gain_loss: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    circulation_lub_oil_me_gain_loss: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    circulation_lub_oil_ae_gain_loss: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    circulation_lub_oil_undef_gain_loss: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    total_circulation_lub_oil_gain_loss: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cylinder_lub_oil_gain_loss: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cylinder_hs_lub_oil_gain_loss: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cylinder_ls_lub_oil_gain_loss: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    undefined_lub_oil_gain_loss: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    total_cylinder_lub_oil_consumption: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    total_cylinder_hs_lub_oil_consumption: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    total_cylinder_ls_lub_oil_consumption: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    total_circulation_lub_oil_consumption_me: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    total_circulation_lub_oil_consumption_ae: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    total_fresh_water_consumption_undefined: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    total_fresh_water_consumption_domestic: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    total_fresh_water_consumption_boiler: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    total_fresh_water_consumption_washing: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    total_oily_water_discharge_undefined: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    total_oily_water_discharge_via_ows: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    total_oily_water_discharge_via_odme: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    estimation_score: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    completeness_score: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    plausibility_score: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    field_194: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'data'
  });
};
