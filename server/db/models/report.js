const db = require('../database');
const Sequelize = require('sequelize');

const { STRING, INTEGER, DECIMAL, DATE } = Sequelize;

const Report = db.define('reports', {
  id: {
    type: INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  timestamp: {
    type: DATE,
  },
  ETA: {
    type: DATE,
  },
  state: {
    type: STRING,
  },
  event: {
    type: STRING,
  },
  captain: {
    type: STRING,
  },
  engineer: {
    type: STRING,
  },
  latitude: {
    type: DECIMAL,
  },
  longitude: {
    type: DECIMAL,
  },
  sailingTime: {
    type: DECIMAL,
  },
  totalRunningHours: {
    type: DECIMAL,
  },
  heading: {
    type: INTEGER,
  },
  speedOverGround: {
    type: DECIMAL,
  },
  speedThroughWater: {
    type: DECIMAL,
  },
  distanceOverGround: {
    type: INTEGER,
  },
  distanceThroughWater: {
    type: INTEGER,
  },
  draftForward: {
    type: DECIMAL,
  },
  draftAft: {
    type: DECIMAL,
  },
  meanDraft: {
    type: DECIMAL,
  },
  trim: {
    type: DECIMAL,
  },
  engineRoomTemp: {
    type: INTEGER,
  },
  coolingWaterTemp: {
    type: INTEGER,
  },
  seaWaterTemp: {
    type: INTEGER,
  },
  seaState: {
    type: INTEGER,
  },
  windSpeedTrue: {
    type: DECIMAL,
  },
  windSpeedRel: {
    type: DECIMAL,
  },
  windDirectionTrue: {
    type: INTEGER,
  },
  windDirectionRel: {
    type: DECIMAL,
  },
  waveHeight: {
    type: DECIMAL,
  },
  cargoHeight: {
    type: INTEGER,
  },
  cargoTEUFull: {
    type: INTEGER,
  },
  cargoTEUEmpty: {
    type: INTEGER,
  },
  cargoReefers: {
    type: INTEGER,
  },
  ballastWeight: {
    type: DECIMAL,
  },
  avgShaftRPM: {
    type: DECIMAL,
  },
  avgSlip: {
    type: DECIMAL,
  },
  totalFOC: {
    type: DECIMAL,
  },
  totalFOCISO: {
    type: DECIMAL,
  },
  totalFOCME: {
    type: DECIMAL,
  },
  totalFOCMEISO: {
    type: DECIMAL,
  },
  totalFOCAE: {
    type: DECIMAL,
  },
  totalFOCAEISO: {
    type: DECIMAL,
  },
  totalFOCAB: {
    type: DECIMAL,
  },
  totalFOCABISO: {
    type: DECIMAL,
  },
  totalFOCHFO: {
    type: DECIMAL,
  },
  totalFOCHFOHS: {
    type: DECIMAL,
  },
  totalFOCMGO: {
    type: DECIMAL,
  },
  totalSFOCME: {
    type: DECIMAL,
  },
  totalSFOCAE: {
    type: DECIMAL,
  },
  totalSFOCMEISO: {
    type: DECIMAL,
  },
  totalSFOCAEISO: {
    type: DECIMAL,
  },
  totalCO2: {
    type: DECIMAL,
  },
  totalCO2AE: {
    type: DECIMAL,
  },
  totalCO2AB: {
    type: DECIMAL,
  },
  totalPowerAEAVG: {
    type: INTEGER,
  },
  totalPOWERAEAVG: {
    type: INTEGER,
  },
  totalGeneratedEnergyME: {
    type: INTEGER,
  },
  totalGeneratedEnergyAE: {
    type: INTEGER,
  },
  totalGeneratedElectricalEnergy: {
    type: INTEGER,
  },
  totalGeneratedShaftEnergy: {
    type: INTEGER,
  },
  totalShaftPowerAVG: {
    type: INTEGER,
  },
  totalShaftPowerCorrectedAVG: {
    type: INTEGER,
  },
  totalElectricalPowerAVG: {
    type: INTEGER,
  },
  MELoadAVG: {
    type: INTEGER,
  },
  deliveredPowerCorrected: {
    type: INTEGER,
  },
  EEOIWeight: {
    type: DECIMAL,
  },
  EEOITEU: {
    type: DECIMAL,
  },
  powerAddedOrReducedByWind: {
    type: DECIMAL,
  },
  totalFuelROB: {
    type: DECIMAL,
  },
  totalFreshWaterROB: {
    type: DECIMAL,
  },
  totalOilHFOROB: {
    type: DECIMAL,
  },
  totalMGOROB: {
    type: DECIMAL,
  },
  circulationLubOilMEROB: {
    type: INTEGER,
  },
  circulationLubOilAEROB: {
    type: INTEGER,
  },
  totalCirculationLubOilROB: {
    type: INTEGER,
  },
  cylinderLubOilROB: {
    type: INTEGER,
  },
  cylinderHSLubOilROB: {
    type: INTEGER,
  },
  freshWaterDrinkingROB: {
    type: DECIMAL,
  },
  totalCylinderLubOilConsumption: {
    type: INTEGER,
  },
  totalCylinderHSLubOilConsumption: {
    type: INTEGER,
  },
  totalCylinderLSLubOilConsumption: {
    type: INTEGER,
  },
  totalFreshWaterConsumptionDomestic: {
    type: INTEGER,
  },
  estimationScore: {
    type: DECIMAL,
  },
  completenessScore: {
    type: DECIMAL,
  },
  plausibilityScore: {
    type: DECIMAL,
  },
});

module.exports = Report;
