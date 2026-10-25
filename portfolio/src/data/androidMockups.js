import hospitalShowcase from '../assets/images/projects/hospital-management/android-showcase.webp';
import hospitalLogin from '../assets/images/projects/hospital-management/01_login.webp';
import hospitalPatient from '../assets/images/projects/hospital-management/02_patient_home.webp';
import hospitalDoctors from '../assets/images/projects/hospital-management/03_doctor_list.webp';
import hospitalDoctorHome from '../assets/images/projects/hospital-management/04_doctor_home.webp';
import devdroidShowcase from '../assets/images/projects/devdroid/android-showcase.webp';
import devdroid0 from '../assets/images/projects/devdroid/01_home.webp';
import devdroid1 from '../assets/images/projects/devdroid/02_new_project.webp';
import devdroid2 from '../assets/images/projects/devdroid/03_project_explorer.webp';
import devdroid3 from '../assets/images/projects/devdroid/04_editor.webp';
import devdroid4 from '../assets/images/projects/devdroid/05_terminal.webp';
import devdroid5 from '../assets/images/projects/devdroid/06_git.webp';
import devdroid6 from '../assets/images/projects/devdroid/07_settings.webp';
import devdroid7 from '../assets/images/projects/devdroid/08_command_palette.webp';
import schedulaShowcase from '../assets/images/projects/schedula/android-showcase.webp';
import schedula0 from '../assets/images/projects/schedula/01_login.webp';
import schedula1 from '../assets/images/projects/schedula/02_classes.webp';
import schedula2 from '../assets/images/projects/schedula/03_notes.webp';
import schedula3 from '../assets/images/projects/schedula/04_assignments.webp';
import schedula4 from '../assets/images/projects/schedula/05_chat.webp';
import schedula5 from '../assets/images/projects/schedula/06_profile.webp';
import schedula6 from '../assets/images/projects/schedula/07_announcements.webp';
import mealMonkeyShowcase from '../assets/images/projects/meal-monkey/android-showcase.webp';
import mealMonkey0 from '../assets/images/projects/meal-monkey/01_splash.webp';
import mealMonkey1 from '../assets/images/projects/meal-monkey/02_landing.webp';
import mealMonkey2 from '../assets/images/projects/meal-monkey/03_login.webp';
import mealMonkey3 from '../assets/images/projects/meal-monkey/04_home.webp';
import mealMonkey4 from '../assets/images/projects/meal-monkey/05_menu.webp';
import mealMonkey5 from '../assets/images/projects/meal-monkey/06_food_detail.webp';
import mealMonkey6 from '../assets/images/projects/meal-monkey/07_my_order.webp';
import mealMonkey7 from '../assets/images/projects/meal-monkey/08_checkout.webp';
import mealMonkey8 from '../assets/images/projects/meal-monkey/09_offers.webp';
import mealMonkey9 from '../assets/images/projects/meal-monkey/10_profile.webp';
import medReminderShowcase from '../assets/images/projects/med-reminder/android-showcase.webp';
import medReminder0 from '../assets/images/projects/med-reminder/01_splash.webp';
import medReminder1 from '../assets/images/projects/med-reminder/02_login.webp';
import medReminder2 from '../assets/images/projects/med-reminder/03_signup.webp';
import medReminder3 from '../assets/images/projects/med-reminder/04_home.webp';
import medReminder4 from '../assets/images/projects/med-reminder/05_add_medicine.webp';
import medReminder5 from '../assets/images/projects/med-reminder/06_medicine_details.webp';
import medReminder6 from '../assets/images/projects/med-reminder/07_medicine_list.webp';
import medReminder7 from '../assets/images/projects/med-reminder/08_medicine_info.webp';
import medReminder8 from '../assets/images/projects/med-reminder/09_bmi_calculator.webp';
import medReminder9 from '../assets/images/projects/med-reminder/10_success.webp';

// UI mockups use sample content from each project's repository.
export const androidMockups = {
  'hospital-management': {
    image: hospitalShowcase,
    imageAlt: 'MedEase doctor directory, patient home, and doctor home in Android device mockups',
    imageWidth: 1440,
    imageHeight: 1080,
    previewLabel: 'Android UI mockups',
    screenshots: [
      { src: hospitalShowcase, alt: 'MedEase hospital management Android showcase', width: 1440, height: 1080 },
      { src: hospitalLogin, alt: 'MedEase login - Android UI mockup', width: 396, height: 900 },
      { src: hospitalPatient, alt: 'MedEase patient home - Android UI mockup', width: 396, height: 900 },
      { src: hospitalDoctors, alt: 'MedEase doctor directory - Android UI mockup', width: 396, height: 900 },
      { src: hospitalDoctorHome, alt: 'MedEase doctor home - Android UI mockup', width: 396, height: 900 },
    ],
  },
  'DevDroid-android-code-editor': {
    image: devdroidShowcase,
    imageAlt: 'DevDroid project explorer, code editor, and terminal in Android device mockups',
    imageWidth: 1440,
    imageHeight: 1080,
    previewLabel: 'Android UI mockups',
    screenshots: [
      { src: devdroidShowcase, alt: 'DevDroid Android workspace showcase', width: 1440, height: 1080 },
      { src: devdroid0, alt: 'DevDroid home - Android UI mockup', width: 396, height: 900 },
      { src: devdroid1, alt: 'DevDroid new project - Android UI mockup', width: 396, height: 900 },
      { src: devdroid2, alt: 'DevDroid project explorer - Android UI mockup', width: 396, height: 900 },
      { src: devdroid3, alt: 'DevDroid editor - Android UI mockup', width: 396, height: 900 },
      { src: devdroid4, alt: 'DevDroid terminal - Android UI mockup', width: 396, height: 900 },
      { src: devdroid5, alt: 'DevDroid git - Android UI mockup', width: 396, height: 900 },
      { src: devdroid6, alt: 'DevDroid settings - Android UI mockup', width: 396, height: 900 },
      { src: devdroid7, alt: 'DevDroid command palette - Android UI mockup', width: 396, height: 900 },
    ],
  },
  'Schedula': {
    image: schedulaShowcase,
    imageAlt: 'Schedula screens in Android device mockups',
    imageWidth: 1440,
    imageHeight: 1080,
    previewLabel: 'Android UI mockups',
    screenshots: [
      { src: schedulaShowcase, alt: 'Android app showcase', width: 1440, height: 1080 },
      { src: schedula0, alt: 'login — Android UI mockup', width: 396, height: 900 },
      { src: schedula1, alt: 'classes — Android UI mockup', width: 396, height: 900 },
      { src: schedula2, alt: 'notes — Android UI mockup', width: 396, height: 900 },
      { src: schedula3, alt: 'assignments — Android UI mockup', width: 396, height: 900 },
      { src: schedula4, alt: 'chat — Android UI mockup', width: 396, height: 900 },
      { src: schedula5, alt: 'profile — Android UI mockup', width: 396, height: 900 },
      { src: schedula6, alt: 'announcements — Android UI mockup', width: 396, height: 900 },
    ],
  },
  'Meal-Monkey': {
    image: mealMonkeyShowcase,
    imageAlt: 'Meal Monkey screens in Android device mockups',
    imageWidth: 1440,
    imageHeight: 1080,
    previewLabel: 'Android UI mockups',
    screenshots: [
      { src: mealMonkeyShowcase, alt: 'Android app showcase', width: 1440, height: 1080 },
      { src: mealMonkey0, alt: 'splash — Android UI mockup', width: 396, height: 900 },
      { src: mealMonkey1, alt: 'landing — Android UI mockup', width: 396, height: 900 },
      { src: mealMonkey2, alt: 'login — Android UI mockup', width: 396, height: 900 },
      { src: mealMonkey3, alt: 'home — Android UI mockup', width: 396, height: 900 },
      { src: mealMonkey4, alt: 'menu — Android UI mockup', width: 396, height: 900 },
      { src: mealMonkey5, alt: 'food detail — Android UI mockup', width: 396, height: 900 },
      { src: mealMonkey6, alt: 'my order — Android UI mockup', width: 396, height: 900 },
      { src: mealMonkey7, alt: 'checkout — Android UI mockup', width: 396, height: 900 },
      { src: mealMonkey8, alt: 'offers — Android UI mockup', width: 396, height: 900 },
      { src: mealMonkey9, alt: 'profile — Android UI mockup', width: 396, height: 900 },
    ],
  },
  'med-reminder': {
    image: medReminderShowcase,
    imageAlt: 'Med Reminder screens in Android device mockups',
    imageWidth: 1440,
    imageHeight: 1080,
    previewLabel: 'Android UI mockups',
    screenshots: [
      { src: medReminderShowcase, alt: 'Android app showcase', width: 1440, height: 1080 },
      { src: medReminder0, alt: 'splash — Android UI mockup', width: 396, height: 900 },
      { src: medReminder1, alt: 'login — Android UI mockup', width: 396, height: 900 },
      { src: medReminder2, alt: 'signup — Android UI mockup', width: 396, height: 900 },
      { src: medReminder3, alt: 'home — Android UI mockup', width: 396, height: 900 },
      { src: medReminder4, alt: 'add medicine — Android UI mockup', width: 396, height: 900 },
      { src: medReminder5, alt: 'medicine details — Android UI mockup', width: 396, height: 900 },
      { src: medReminder6, alt: 'medicine list — Android UI mockup', width: 396, height: 900 },
      { src: medReminder7, alt: 'medicine info — Android UI mockup', width: 396, height: 900 },
      { src: medReminder8, alt: 'bmi calculator — Android UI mockup', width: 396, height: 900 },
      { src: medReminder9, alt: 'success — Android UI mockup', width: 396, height: 900 },
    ],
  },
};

