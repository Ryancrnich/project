export const createProject = project => {
  return (dispatch, getStatem, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("appointments")
      .add({
        ...project,
        createAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", project });
      })
      .catch(err => {
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });
    dispatch({ type: "CREATE_PROJECT", project });
  };
};
export const createAppointment = appointment => {
  return (dispatch, getStatem, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("appointmentsTaken")
      .add({
        ...appointment
      })
      .then(() => {
        dispatch({ type: "CREATE_APPOINTMENT", appointment });
      })
      .catch(err => {
        dispatch({ type: "CREATE_APPOINTMENT_ERROR", err });
      });
  };
};

export const deleteAppointment = appointment => {
  return (dispatch, getStatem, { getFirebase, getFirestore }) => {
  
    const firestore = getFirestore();
    firestore.collection("appointments")
      .doc(appointment.id)
      .delete()
      .then(function() {
        console.log("Document successfully deleted!");
      })
      .then(() => {
        dispatch({ type: "DELETE_APPOINTMENT", appointment });
      })
      .catch(err => {
        dispatch({ type: "DELETE_APPOINTMENT_ERROR", err });
      });
  };
};

export const deleteAppointmentmember = appointment => {
  return (dispatch, getStatem, { getFirebase, getFirestore }) => {
  
    const firestore = getFirestore();
    firestore.collection("appointmentsforteam")
      .doc(appointment.id)
      .delete()
      .then(function() {
        console.log("Document successfully deleted!");
      })
      .then(() => {
        dispatch({ type: "DELETE_APPOINTMENT", appointment });
      })
      .catch(err => {
        dispatch({ type: "DELETE_APPOINTMENT_ERROR", err });
      });
  };
};
export const deleteNotification= appointment => {
  return (dispatch, getStatem, { getFirebase, getFirestore }) => {
  
    const firestore = getFirestore();
    firestore.collection("notifications")
      .doc(appointment.id)
      .delete()
      .then(function() {
        console.log("Document successfully deleted!");
      })
      .then(() => {
        dispatch({ type: "DELETE_APPOINTMENT", appointment });
      })
      .catch(err => {
        dispatch({ type: "DELETE_APPOINTMENT_ERROR", err });
      });
  };
};

export const createNotification = appointment => {
  return (dispatch, getStatem, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("Notifications")
      .add({
        ...appointment
      })
      .then(() => {
        dispatch({ type: "CREATE_NOIFICATIONS", appointment });
      })
      .catch(err => {
        dispatch({ type: "CREATE_NOIFICATIONS_ERROR", err });
      });
  };
};


export const createforteamProject = project => {
  return (dispatch, getStatem, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("appointmentsforteam")
      .add({
        ...project,
        createAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", project });
      })
      .catch(err => {
        dispatch({ type: "CREATE_PROJECT_ERROR", err });
      });
    dispatch({ type: "CREATE_PROJECT", project });
  };
};