<?php

namespace App\Controller\Admin;

use App\Entity\Session;
use EasyCorp\Bundle\EasyAdminBundle\Field\AssociationField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextField;
use EasyCorp\Bundle\EasyAdminBundle\Field\TextareaField;
use EasyCorp\Bundle\EasyAdminBundle\Field\DateTimeField;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractCrudController;
use EasyCorp\Bundle\EasyAdminBundle\Field\FormField;
use EasyCorp\Bundle\EasyAdminBundle\Config\Crud;

class SessionCrudController extends AbstractCrudController
{
  public static function getEntityFqcn(): string
  {
    return Session::class;
  }
  public function configureCrud(Crud $crud): Crud
  {
      return $crud
        ->setEntityLabelInSingular('Session')
          ->setEntityLabelInPlural('Sessions');
  }

  public function configureFields(string $pageName): iterable
  {
    yield AssociationField::new('event');
    yield AssociationField::new('speakers')
      ->autocomplete()
      ->setFormTypeOption('multiple', true)
      ->setFormTypeOption('by_reference', false)->hideOnIndex();
    yield TextField::new('title');
    yield TextareaField::new('description');
    yield TextField::new('location');
    yield DateTimeField::new('start_at')->setFormTypeOptions([
      'years' => range(date('Y'), date('Y') + 5),
      'widget' => 'single_text',
    ]);
    yield DateTimeField::new('end_at')->setFormTypeOptions([
      'years' => range(date('Y'), date('Y') + 5),
      'widget' => 'single_text',
    ]);
  }
}
