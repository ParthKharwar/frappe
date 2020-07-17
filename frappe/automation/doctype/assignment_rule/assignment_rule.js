// Copyright (c) 2019, Frappe Technologies and contributors
// For license information, please see license.txt

frappe.ui.form.on('Assignment Rule', {
	refresh: function(frm) {
		// refresh description
		frm.events.rule(frm);
		frm.events.role(frm);
	},
	rule: function(frm) {
		if (frm.doc.rule === 'Round Robin') {
			frm.get_field('rule').set_description(__('Assign one by one, in sequence'));
		} else if (frm.doc.rule === 'Load Balancing') {
			frm.get_field('rule').set_description(__('Assign to the one who has the least assignments'));
		} else if (frm.doc.rule === 'All') {
			frm.get_field('rule').set_description(__('Assign to all users selected'));
		}
	},
	role: function(frm) {
		if (frm.doc.role) {
			frm.set_df_property('users', 'reqd', 0);
			frm.set_df_property('exclude_users', 'hidden', 0);
			frm.get_field('role').set_description(__('Assign to all users with this Role in addition to users listed in the User field'));
		} else {
			frm.set_df_property('users', 'reqd', 1);
			frm.set_df_property('exclude_users', 'hidden', 1);
			frm.get_field('role').set_description(__(''));
		}
	}
});
