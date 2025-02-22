import devices from '@js/core/devices';
import { findBestMatches } from '@js/core/utils/common';
import { compileGetter } from '@js/core/utils/data';
import { extend } from '@js/core/utils/extend';
import { isEmptyObject, isFunction } from '@js/core/utils/type';

const cachedGetters = {};

export const convertRulesToOptions = (rules) => {
  const currentDevice = devices.current();
  return rules.reduce((options, { device, options: ruleOptions }) => {
    const deviceFilter = device || {};
    const match = isFunction(deviceFilter)
      ? deviceFilter(currentDevice)
      : deviceMatch(currentDevice, deviceFilter);

    if (match) {
      extend(true, options, ruleOptions);
    }
    return options;
  }, {});
};

export const normalizeOptions = (options, value) => (typeof options !== 'string' ? options : { [options]: value });

export const deviceMatch = (device, filter) => isEmptyObject(filter) || findBestMatches(device, [filter]).length > 0;

export const getFieldName = (fullName) => fullName.substr(fullName.lastIndexOf('.') + 1);

export const getParentName = (fullName) => fullName.substr(0, fullName.lastIndexOf('.'));

export const getNestedOptionValue = function (optionsObject, name) {
  cachedGetters[name] = cachedGetters[name] || compileGetter(name);
  return cachedGetters[name](optionsObject, { functionsAsIs: true });
};

export const createDefaultOptionRules = (options = []) => options;
