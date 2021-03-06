const {SerializedObject} = require("./SerializedObject.js");

/**
 * High level information about the annotations in this document.
 *
 * @type {AnnotationInfo}
 */
class AnnotationInfo extends SerializedObject {

    constructor(val) {

        super(val);

        /**
         * The last time this document was annotated (pagemarks updated, text
         * updated, etc).
         *
         * @type {ISODateTime}
         */
        this.lastAnnotated = null;

        this.init(val);

    }

};


module.exports.AnnotationInfo = AnnotationInfo;
