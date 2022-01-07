const DEBUG_LEVELS = {
  MUTE: -1,    // No messages
  ERROR: 0,    // Only error messages
  WARNING: 1,  // Error and Warning messages
  INFO: 2,     // Info, Error and Warning messages
  DEBUG:3,     // Debug, Info, Error and Warning messages

  ALL:Infinity // All messages
};

const DEBUG_LEVEL = DEBUG_LEVELS.ALL;

/**
 * Universal logger 
 * @author Grigory Boew (ff.nspu@gmail.com)
 * @param {string} promt Message text
 * @param {number} level Message level
 */
function debug(promt, level=DEBUG_LEVELS.INFO){
  if (level<=DEBUG_LEVEL){
    const debugLevelName = Object.entries(DEBUG_LEVELS).filter(([k,v])=>v===level)[0][0];
    const text = (typeof promt === typeof({}))?JSON.stringify(promt, null, " "):promt;
    Logger.log(`[${debugLevelName}] ${text}`)
  };
};

/**
 * Error logger. Calls debug with level=DEBUG_LEVELS.ERROR
 * @author Grigory Boew (ff.nspu@gmail.com)
 * @param {string} promt Message text
 */
function debugError(promt){
	debug(promt, DEBUG_LEVELS.ERROR);
};

/**
 * Warning logger. Calls debug with level=DEBUG_LEVELS.WARNING
 * @author Grigory Boew (ff.nspu@gmail.com)
 * @param {string} promt Message text
 */
function debugWarning(promt){
	debug(promt, DEBUG_LEVELS.WARNING);
};

/**
 * Debug logger. Calls debug with level=DEBUG_LEVELS.DEBUG
 * @author Grigory Boew (ff.nspu@gmail.com)
 * @param {string} promt Message text
 */
function debugDebug(promt){
	debug(promt, DEBUG_LEVELS.DEBUG);
};

/**
 * Info logger. Calls debug with level=DEBUG_LEVELS.INFO
 * @author Grigory Boew (ff.nspu@gmail.com)
 * @param {string} promt Message text
 */
function debugInfo(promt){
	debug(promt, DEBUG_LEVELS.INFO);
};
