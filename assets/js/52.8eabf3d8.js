(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{390:function(e,t,a){"use strict";a.r(t);var s=a(14),r=Object(s.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"ehr-definitions-input-types"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ehr-definitions-input-types"}},[e._v("#")]),e._v(" EHR Definitions - Input Types")]),e._v(" "),t("blockquote",[t("p",[e._v("Each element has a type.")])]),e._v(" "),t("h2",{attrs:{id:"page"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#page"}},[e._v("#")]),e._v(" page")]),e._v(" "),t("p",[e._v("A page element defines an EHR page; the top level element. The child elements for page include: page_form and table_row.\nA page can have one or none one page_form.\nA page can have one or more table_row elements.\nA page needs at least one element to be useful.")]),e._v(" "),t("h2",{attrs:{id:"page-form"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#page-form"}},[e._v("#")]),e._v(" page_form")]),e._v(" "),t("p",[e._v("Page forms contain a set of input elements.")]),e._v(" "),t("h2",{attrs:{id:"table-row"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#table-row"}},[e._v("#")]),e._v(" table_row")]),e._v(" "),t("p",[e._v("Tables display arrays of data and each table has a related dialog to create a row in the table. Some of these dialogs are only accessible by admins setting up seed data.")]),e._v(" "),t("h3",{attrs:{id:"child-elements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#child-elements"}},[e._v("#")]),e._v(" Child elements")]),e._v(" "),t("h2",{attrs:{id:"assetlink"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#assetlink"}},[e._v("#")]),e._v(" assetLink")]),e._v(" "),t("p",[e._v("An assetLink provides a link to a file served from the web root. The files are stored in the code repository in the "),t("code",[e._v("client/public/assets")]),e._v(" directory.\nThe "),t("code",[e._v("label")]),e._v(" property is displayed as the link text.\nThe "),t("code",[e._v("assetBase")]),e._v(" property is the folder containing the file and "),t("code",[e._v("assetName")]),e._v(" is the file name. The link is created with both\nthese properties. To add a new file:")]),e._v(" "),t("ul",[t("li",[e._v("place the file in the appropriate folder of "),t("code",[e._v("client/public/assets")]),e._v(" (make a new subdirectory if needed)")]),e._v(" "),t("li",[e._v("in the Inputs sheet\n"),t("ul",[t("li",[e._v("set assetBase to the folder name")]),e._v(" "),t("li",[e._v("set assetName to the file name")]),e._v(" "),t("li",[e._v("set the desired link text into the label column.")])])])]),e._v(" "),t("h2",{attrs:{id:"calculated"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#calculated"}},[e._v("#")]),e._v(" calculated")]),e._v(" "),t("p",[e._v("See the EhrCalculatedValues readme")]),e._v(" "),t("h2",{attrs:{id:"checkbox"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#checkbox"}},[e._v("#")]),e._v(" checkbox")]),e._v(" "),t("p",[e._v("This type renders an HTML input element with type 'checkbox' followed by a label.")]),e._v(" "),t("h2",{attrs:{id:"day"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#day"}},[e._v("#")]),e._v(" day")]),e._v(" "),t("p",[e._v("Also see time\nThis input is to represent a 'day' in the context of a class assignment")]),e._v(" "),t("h2",{attrs:{id:"fieldset-fieldrowset"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fieldset-fieldrowset"}},[e._v("#")]),e._v(" fieldset fieldRowSet")]),e._v(" "),t("p",[e._v("Fieldsets group input elements.")]),e._v(" "),t("p",[e._v("The input type fieldRowSet is not used at the time of writing but it could be used to create a row based\ngrouping.")]),e._v(" "),t("h2",{attrs:{id:"form-label"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#form-label"}},[e._v("#")]),e._v(" form_label")]),e._v(" "),t("p",[e._v("The content in the form label property accepts raw html. For example")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("<b>Resources</b>\n<p>Morse Fall Score <a target='_blank' href='https://google.ca'>external link</a></p>\n<p>Mini-mental state examination (MMSE) <a target='_blank' href='https://google.ca'>external link</a></p>\n")])])]),t("h2",{attrs:{id:"select-box"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#select-box"}},[e._v("#")]),e._v(" select box")]),e._v(" "),t("p",[e._v("A select box is shown as a drop down list. The select options are provided in the "),t("code",[e._v("options")]),e._v(" multi-line property. Each line\nis parsed to become one of the options. When a user selects an option, the entire content is stored in the database but, this\nmay change in the future.")]),e._v(" "),t("p",[e._v("Some option lists contain a set of lines of the form "),t("code",[e._v("N = text")]),e._v(". Currently this special format is only used by the\ncalculated values (see above) yet in the future we may wish to make the left had side be the value to store in the database.")]),e._v(" "),t("blockquote",[t("p",[e._v("NEW key value pairs")])]),e._v(" "),t("p",[e._v("Options are now split into keys and values. By default the entire text content is the key and value.\nWhen the text contains "),t("code",[e._v(":=")]),e._v(" the generator will split this into key and value. For example:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("sched := Scheduled\nprn := PRN (as needed)\nonce := Once\nstat := Stat\n")])])]),t("p",[e._v("These keys can be used to control group visibility.")]),e._v(" "),t("h3",{attrs:{id:"formoption-hidelabel"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#formoption-hidelabel"}},[e._v("#")]),e._v(" formOption hideLabel")]),e._v(" "),t("p",[e._v("If a select box or text box has "),t("code",[e._v("hideLabel")]),e._v(" in its formOption then the label is not displayed")]),e._v(" "),t("h2",{attrs:{id:"spacer"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#spacer"}},[e._v("#")]),e._v(" spacer")]),e._v(" "),t("p",[e._v("A spacer is equal to an empty label. Useful to have an element in place that spaces other elements.")]),e._v(" "),t("h2",{attrs:{id:"text"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#text"}},[e._v("#")]),e._v(" text")]),e._v(" "),t("p",[e._v("A text input is the standard HTML text input with a label displayed before the input area.")]),e._v(" "),t("h2",{attrs:{id:"textarea"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#textarea"}},[e._v("#")]),e._v(" textarea")]),e._v(" "),t("p",[e._v("A textarea input is the standard HTML textarea input with a label displayed before the input area.")]),e._v(" "),t("h2",{attrs:{id:"time"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#time"}},[e._v("#")]),e._v(" time")]),e._v(" "),t("p",[e._v("Also see day\nThis input is to represent a 'time' in the context of a class assignment")])])}),[],!1,null,null,null);t.default=r.exports}}]);