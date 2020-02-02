const DEFAULT_TYPES = [ 'REQUEST', 'SUCCESS', 'FAILURE' ]

/**
 * Compose types
 * -----
 * compose type from type enum and action name
 * @param action { string }
 */
const composeTypes =
  (action) =>
    (type, nextType) =>
      Object.assign(type, { [nextType]: `${action}_${nextType}` })

/**
 * Build action Types
 * -----
 * build the action types
 * @param action { string }
 * @param types { array }
 * @return Object
 */
const buildActionTypes =
  (action, types = DEFAULT_TYPES) => {

    if (!Array.isArray(types)) {
      throw new TypeError('Types should be an array!')
    }

    return types.reduce(composeTypes(action), {})
  }

export default buildActionTypes