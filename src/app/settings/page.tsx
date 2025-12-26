'use client';

import { useState } from 'react';
import styles from './Settings.module.css';

export default function SettingsPage() {
  const [activeSection, setActiveSection] = useState('account');
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showAnonymizeConfirm, setShowAnonymizeConfirm] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          {activeSection === 'account' && (
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Informations du compte</h2>
              
              <div className={styles.formGroup}>
                <label className={styles.label}>Photo de profil</label>
                <div className={styles.avatarUpload}>
                  <div className={styles.avatarPreview}>J</div>
                  <div className={styles.avatarActions}>
                    <button className={styles.btnSecondary}>Changer la photo</button>
                    <button className={styles.btnDanger}>Supprimer</button>
                  </div>
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="username">Nom d'utilisateur</label>
                <input
                  type="text"
                  id="username"
                  className={styles.input}
                  defaultValue="JALBISER"
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="email">Adresse email</label>
                <input
                  type="email"
                  id="email"
                  className={styles.input}
                  defaultValue="jalbiser@example.com"
                />
                <p className={styles.hint}>Utilisée pour la récupération de compte et les notifications importantes</p>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="bio">Biographie</label>
                <textarea
                  id="bio"
                  className={styles.textarea}
                  rows={4}
                  defaultValue="Passionné d'échecs depuis toujours ! Toujours prêt pour une partie enflammée ♟️"
                />
              </div>

              <button className={styles.btnPrimary}>Enregistrer les modifications</button>
            </div>
          )}

          {activeSection === 'security' && (
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Sécurité</h2>
              
              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="currentPassword">Mot de passe actuel</label>
                <input
                  type="password"
                  id="currentPassword"
                  className={styles.input}
                  placeholder="••••••••"
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="newPassword">Nouveau mot de passe</label>
                <input
                  type="password"
                  id="newPassword"
                  className={styles.input}
                  placeholder="••••••••"
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="confirmPassword">Confirmer le mot de passe</label>
                <input
                  type="password"
                  id="confirmPassword"
                  className={styles.input}
                  placeholder="••••••••"
                />
                <p className={styles.hint}>Le mot de passe doit contenir au moins 8 caractères</p>
              </div>

              <button className={styles.btnPrimary}>Changer le mot de passe</button>

              <div className={styles.divider}></div>

              <h3 className={styles.subsectionTitle}>Authentification à deux facteurs</h3>
              <p className={styles.description}>
                Ajoutez une couche de sécurité supplémentaire à votre compte
              </p>
              <button className={styles.btnSecondary}>Activer 2FA</button>

              <div className={styles.divider}></div>

              <h3 className={styles.subsectionTitle}>Sessions actives</h3>
              <div className={styles.sessionsList}>
                <div className={styles.sessionItem}>
                  <div>
                    <div className={styles.sessionDevice}>MacBook Pro - Chrome</div>
                    <div className={styles.sessionInfo}>Paris, France • Actif maintenant</div>
                  </div>
                  <span className={styles.currentSession}>Session actuelle</span>
                </div>
                <div className={styles.sessionItem}>
                  <div>
                    <div className={styles.sessionDevice}>iPhone - Safari</div>
                    <div className={styles.sessionInfo}>Paris, France • Il y a 2 heures</div>
                  </div>
                  <button className={styles.btnDangerSmall}>Déconnecter</button>
                </div>
              </div>
              <button className={styles.btnDanger}>Déconnecter toutes les sessions</button>
            </div>
          )}

          {activeSection === 'privacy' && (
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Confidentialité</h2>
              
              <div className={styles.settingItem}>
                <div>
                  <div className={styles.settingLabel}>Profil public</div>
                  <div className={styles.settingDescription}>
                    Permettre aux autres utilisateurs de voir votre profil
                  </div>
                </div>
                <label className={styles.switch}>
                  <input type="checkbox" defaultChecked />
                  <span className={styles.slider}></span>
                </label>
              </div>

              <div className={styles.settingItem}>
                <div>
                  <div className={styles.settingLabel}>Afficher les statistiques</div>
                  <div className={styles.settingDescription}>
                    Rendre vos statistiques visibles sur votre profil public
                  </div>
                </div>
                <label className={styles.switch}>
                  <input type="checkbox" defaultChecked />
                  <span className={styles.slider}></span>
                </label>
              </div>

              <div className={styles.settingItem}>
                <div>
                  <div className={styles.settingLabel}>Historique des parties</div>
                  <div className={styles.settingDescription}>
                    Permettre aux autres de voir vos parties précédentes
                  </div>
                </div>
                <label className={styles.switch}>
                  <input type="checkbox" defaultChecked />
                  <span className={styles.slider}></span>
                </label>
              </div>

              <div className={styles.settingItem}>
                <div>
                  <div className={styles.settingLabel}>Statut en ligne</div>
                  <div className={styles.settingDescription}>
                    Afficher quand vous êtes en ligne
                  </div>
                </div>
                <label className={styles.switch}>
                  <input type="checkbox" defaultChecked />
                  <span className={styles.slider}></span>
                </label>
              </div>

              <div className={styles.settingItem}>
                <div>
                  <div className={styles.settingLabel}>Invitations de parties</div>
                  <div className={styles.settingDescription}>
                    Qui peut vous inviter à jouer
                  </div>
                </div>
                <select className={styles.select}>
                  <option>Tout le monde</option>
                  <option>Amis uniquement</option>
                  <option>Personne</option>
                </select>
              </div>
            </div>
          )}

          {activeSection === 'notifications' && (
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Notifications</h2>
              
              <h3 className={styles.subsectionTitle}>Notifications par email</h3>
              
              <div className={styles.settingItem}>
                <div>
                  <div className={styles.settingLabel}>Nouvelles parties</div>
                  <div className={styles.settingDescription}>
                    Recevoir un email quand quelqu'un vous invite à jouer
                  </div>
                </div>
                <label className={styles.switch}>
                  <input type="checkbox" defaultChecked />
                  <span className={styles.slider}></span>
                </label>
              </div>

              <div className={styles.settingItem}>
                <div>
                  <div className={styles.settingLabel}>Messages privés</div>
                  <div className={styles.settingDescription}>
                    Être notifié des nouveaux messages
                  </div>
                </div>
                <label className={styles.switch}>
                  <input type="checkbox" defaultChecked />
                  <span className={styles.slider}></span>
                </label>
              </div>

              <div className={styles.settingItem}>
                <div>
                  <div className={styles.settingLabel}>Demandes d'amis</div>
                  <div className={styles.settingDescription}>
                    Notifications des nouvelles demandes d'amis
                  </div>
                </div>
                <label className={styles.switch}>
                  <input type="checkbox" defaultChecked />
                  <span className={styles.slider}></span>
                </label>
              </div>

              <div className={styles.divider}></div>

              <h3 className={styles.subsectionTitle}>Notifications push</h3>

              <div className={styles.settingItem}>
                <div>
                  <div className={styles.settingLabel}>Activer les notifications push</div>
                  <div className={styles.settingDescription}>
                    Recevoir des notifications dans votre navigateur
                  </div>
                </div>
                <label className={styles.switch}>
                  <input type="checkbox" />
                  <span className={styles.slider}></span>
                </label>
              </div>

              <div className={styles.divider}></div>

              <h3 className={styles.subsectionTitle}>Newsletter</h3>

              <div className={styles.settingItem}>
                <div>
                  <div className={styles.settingLabel}>Newsletter hebdomadaire</div>
                  <div className={styles.settingDescription}>
                    Recevoir un résumé de vos parties et actualités
                  </div>
                </div>
                <label className={styles.switch}>
                  <input type="checkbox" defaultChecked />
                  <span className={styles.slider}></span>
                </label>
              </div>
            </div>
          )}

          {activeSection === 'data' && (
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Gestion des données</h2>
              <p className={styles.description}>
                Conformément au RGPD, vous avez le droit de gérer vos données personnelles
              </p>

              <div className={styles.dataSection}>
                <h3 className={styles.subsectionTitle}>Exporter mes données</h3>
                <p className={styles.description}>
                  Téléchargez une copie de toutes vos données personnelles (profil, statistiques, parties, messages)
                </p>
                <button className={styles.btnSecondary}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 12v7H5v-7H3v7c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-7h-2zm-6 .67l2.59-2.58L17 11.5l-5 5-5-5 1.41-1.41L11 12.67V3h2z"/>
                  </svg>
                  Télécharger mes données
                </button>
              </div>

              <div className={styles.divider}></div>

              <div className={styles.dataSection}>
                <h3 className={styles.subsectionTitle}>Anonymiser mon compte</h3>
                <p className={styles.description}>
                  Remplacer toutes vos informations personnelles par des données anonymes. Vos parties et statistiques seront conservées mais ne seront plus liées à votre identité.
                </p>
                <button 
                  className={styles.btnWarning}
                  onClick={() => setShowAnonymizeConfirm(true)}
                >
                  Anonymiser mon compte
                </button>

                {showAnonymizeConfirm && (
                  <div className={styles.confirmBox}>
                    <h4 className={styles.confirmTitle}>⚠️ Confirmer l'anonymisation</h4>
                    <p className={styles.confirmText}>
                      Cette action remplacera vos informations personnelles (nom, email, photo) par des données anonymes. 
                      Vous pourrez toujours vous connecter mais votre identité ne sera plus visible.
                    </p>
                    <p className={styles.confirmText}>
                      <strong>Cette action est irréversible.</strong>
                    </p>
                    <div className={styles.confirmActions}>
                      <button 
                        className={styles.btnSecondary}
                        onClick={() => setShowAnonymizeConfirm(false)}
                      >
                        Annuler
                      </button>
                      <button className={styles.btnWarning}>
                        Confirmer l'anonymisation
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div className={styles.divider}></div>

              <div className={styles.dataSection}>
                <h3 className={styles.subsectionTitle}>Supprimer mon compte</h3>
                <p className={styles.description}>
                  Supprimer définitivement votre compte et toutes vos données. Cette action est irréversible.
                </p>
                <button 
                  className={styles.btnDanger}
                  onClick={() => setShowDeleteConfirm(true)}
                >
                  Supprimer mon compte
                </button>

                {showDeleteConfirm && (
                  <div className={styles.confirmBox}>
                    <h4 className={styles.confirmTitle}>⚠️ Confirmer la suppression</h4>
                    <p className={styles.confirmText}>
                      Êtes-vous sûr de vouloir supprimer votre compte ? Cette action supprimera :
                    </p>
                    <ul className={styles.confirmList}>
                      <li>Votre profil et toutes vos informations personnelles</li>
                      <li>Toutes vos statistiques et historiques de parties</li>
                      <li>Vos amis et messages</li>
                      <li>Tous vos paramètres et préférences</li>
                    </ul>
                    <p className={styles.confirmText}>
                      <strong>Cette action est définitive et irréversible.</strong>
                    </p>
                    <div className={styles.formGroup}>
                      <label className={styles.label}>
                        Tapez "SUPPRIMER" pour confirmer
                      </label>
                      <input
                        type="text"
                        className={styles.input}
                        placeholder="SUPPRIMER"
                      />
                    </div>
                    <div className={styles.confirmActions}>
                      <button 
                        className={styles.btnSecondary}
                        onClick={() => setShowDeleteConfirm(false)}
                      >
                        Annuler
                      </button>
                      <button className={styles.btnDanger}>
                        Supprimer définitivement
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <div className={styles.divider}></div>

              <div className={styles.dataSection}>
                <h3 className={styles.subsectionTitle}>Vos droits RGPD</h3>
                <ul className={styles.rgpdList}>
                  <li>✓ Droit d'accès à vos données</li>
                  <li>✓ Droit de rectification</li>
                  <li>✓ Droit à l'effacement ("droit à l'oubli")</li>
                  <li>✓ Droit à la limitation du traitement</li>
                  <li>✓ Droit à la portabilité des données</li>
                  <li>✓ Droit d'opposition</li>
                </ul>
                <p className={styles.description}>
                  Pour toute question concernant vos données personnelles, contactez-nous à <a href="mailto:privacy@example.com" className={styles.link}>privacy@example.com</a>
                </p>
              </div>
            </div>
          )}
        </div>
        <div>
         <div className={styles.sidebar}>
          <button
            className={`${styles.sidebarItem} ${activeSection === 'account' ? styles.active : ''}`}
            onClick={() => setActiveSection('account')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
            Compte
          </button>
          <button
            className={`${styles.sidebarItem} ${activeSection === 'security' ? styles.active : ''}`}
            onClick={() => setActiveSection('security')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
            </svg>
            Sécurité
          </button>
          <button
            className={`${styles.sidebarItem} ${activeSection === 'privacy' ? styles.active : ''}`}
            onClick={() => setActiveSection('privacy')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
            </svg>
            Confidentialité
          </button>
          <button
            className={`${styles.sidebarItem} ${activeSection === 'notifications' ? styles.active : ''}`}
            onClick={() => setActiveSection('notifications')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
            </svg>
            Notifications
          </button>
          <button
            className={`${styles.sidebarItem} ${activeSection === 'data' ? styles.active : ''}`}
            onClick={() => setActiveSection('data')}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46C10.21 6.23 11.08 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3 0 1.13-.64 2.11-1.56 2.62l1.45 1.45C23.16 18.16 24 16.68 24 15c0-2.64-2.05-4.78-4.65-4.96zM3 5.27l2.75 2.74C2.56 8.15 0 10.77 0 14c0 3.31 2.69 6 6 6h11.73l2 2L21 20.73 4.27 4 3 5.27zM7.73 10l8 8H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h1.73z"/>
            </svg>
            Mes données
          </button>
        </div>
       </div>
      </div>
    </div>
  );
}
